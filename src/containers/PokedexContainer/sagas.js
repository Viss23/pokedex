import { all, put, call, takeEvery } from "redux-saga/effects";
import {
  FETCH_DATA,
  FETCH_DATA_IN_PROGRESS,
  FETCH_DATA_SUCCESS,
  FETCH_POSSIBLE_TYPES,
  FETCH_POSSIBLE_TYPES_SUCCESS,
} from "./actionTypes";
import axios from "axios";

function* fetchDataSaga({ payload }) {
  const { limit, offset } = payload;
  yield put({ type: FETCH_DATA_IN_PROGRESS });
  const response = yield call(
    axios.get,
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const arrayOfUrls = response.data.results;
  const arrayOfPokemons = yield all(
    arrayOfUrls.map((obj) => {
      return call(axios.get, obj.url);
    })
  );
  const filteredArrayOfPokemons = arrayOfPokemons.map((element) => {
    const {
      id,
      name,
      height,
      moves,
      stats,
      types,
      weight,
      sprites: { front_default },
    } = element.data;
    return {
      id,
      name,
      height,
      totalMoves: moves.length,
      stats,
      types,
      weight,
      sprite: front_default,
    };
  });
  yield put({
    type: FETCH_DATA_SUCCESS,
    payload: { pokemons: filteredArrayOfPokemons, offset, limit },
  });
}

export function* watchFetchDataSaga() {
  yield takeEvery(FETCH_DATA, fetchDataSaga);
}

function* fetchPossibleTypes() {
  const response = yield call(
    axios.get,
    "https://pokeapi.co/api/v2/type?limit=999"
  );
  const possibleTypes = response.data.results;
  yield put({ type: FETCH_POSSIBLE_TYPES_SUCCESS, payload: { possibleTypes } });
}

export function* watchFetchPossibleTypes() {
  yield takeEvery(FETCH_POSSIBLE_TYPES, fetchPossibleTypes);
}

export default function* pokedexSaga() {
  yield all([watchFetchDataSaga(), watchFetchPossibleTypes()]);
}
