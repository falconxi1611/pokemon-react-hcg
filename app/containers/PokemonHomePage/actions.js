/*
 *
 * EmployeeListPage actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_LOADING_ACTION,
  GET_LIST_POKEMON_ACTION,
  SET_LIST_POKEMON_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setLoadingAction(flag) {
  return {
    type: SET_LOADING_ACTION,
    flag,
  };
}

export function getListPokemonAction(params) {
  return {
    type: GET_LIST_POKEMON_ACTION,
    params,
  };
}

export function setListPokemonAction(listPokemon) {
  return {
    type: SET_LIST_POKEMON_ACTION,
    listPokemon,
  };
}
