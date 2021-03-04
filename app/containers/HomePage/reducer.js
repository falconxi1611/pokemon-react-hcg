/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CHANGE_USERNAME, SET_LIST_POKEMON, SET_LOADING } from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  listPokemon: [],
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        // Delete prefixed '@' from the github username
        draft.username = action.username.replace(/@/gi, '');
        break;
      case SET_LOADING:
        draft.listPokemon = action.flag || false;
        break;
      case SET_LIST_POKEMON:
        draft.listPokemon = action.listPokemon || [];
        break;
    }
  });

export default homeReducer;
