import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_IN_PROGRESS,
  FETCH_POSSIBLE_TYPES_SUCCESS,
  ADD_TYPE_TO_FILTER,
  REMOVE_TYPE_FROM_FILTER,
} from "./actionTypes";

const initialState = {
  filteredByType: [],
  pokemons: [],
  possibleTypes: [],
  offset: 0,
  limit: 12,
  isLoading: false,
};

const pokedexReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DATA_IN_PROGRESS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        pokemons: [...state.pokemons, ...payload.pokemons],
        offset: payload.offset + payload.limit,
        isLoading: false,
      };
    }
    case FETCH_POSSIBLE_TYPES_SUCCESS: {
      return {
        ...state,
        possibleTypes: [...payload.possibleTypes],
      };
    }
    case ADD_TYPE_TO_FILTER: {
      return {
        ...state,
        filteredByType: [...state.filteredByType, payload.type],
      };
    }
    case REMOVE_TYPE_FROM_FILTER: {
      return {
        ...state,
        filteredByType: state.filteredByType.filter(
          (item) => item !== payload.type
        ),
      };
    }
    default:
      return state;
  }
};

export default pokedexReducer;
