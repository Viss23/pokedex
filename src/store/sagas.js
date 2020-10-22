import { all } from 'redux-saga/effects';
import pokedexSaga from '../containers/PokedexContainer/sagas'

export  function* rootSaga() {
  yield all([
    pokedexSaga(),
  ])
}