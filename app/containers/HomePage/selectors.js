/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );

const makeSelectLoading = () =>
  createSelector(
    selectHome,
    homeState => homeState.loading,
  );

const makeSelectPokemonList = () =>
  createSelector(
    selectHome,
    homeState => homeState.pokemonList,
  );

export default selectHome;
export {
  selectHome,
  makeSelectLoading,
  makeSelectUsername,
  makeSelectPokemonList,
};
