/*
 *
 * pokemonHomePage reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  SET_LOADING_ACTION,
  SET_LIST_POKEMON_ACTION,
} from './constants';

export const initialState = {
  listPokemon: [],
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const pokemonHomePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case SET_LOADING_ACTION:
        draft.loading = action.flag ? action.flag : false;
        break;
      case SET_LIST_POKEMON_ACTION:
        draft.listPokemon = action.listPokemon || {};
        break;
    }
  });

export default pokemonHomePageReducer;
