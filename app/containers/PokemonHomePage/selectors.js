import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pokemonHomePage state domain
 */

const selectPokemonHomePageDomain = state =>
  state.pokemonHomePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PokemonHomePage
 */

const makeSelectPokemonHomePage = () =>
  createSelector(
    selectPokemonHomePageDomain,
    substate => substate,
  );

const makeSelectIsLoading = () =>
  createSelector(
    selectPokemonHomePageDomain,
    substate => substate.loading,
  );

const makeSelectPokemonList = () =>
  createSelector(
    selectPokemonHomePageDomain,
    substate => substate.listPokemon,
  );
export default makeSelectPokemonHomePage;
export {
  selectPokemonHomePageDomain,
  makeSelectIsLoading,
  makeSelectPokemonList,
};
