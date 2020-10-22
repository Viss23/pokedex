import { combineReducers } from 'redux';

import pokedexReducer from '../containers/PokedexContainer/reducer'

export default combineReducers({
  pokedex: pokedexReducer,
});