/**
 * Gets the repositories of the user from Github
 */

import { call, all, put, takeLatest } from 'redux-saga/effects';
import PokemonServices from '../../services/pokemon';
import { GET_LIST_POKEMON } from './constants';
import { setListPokemon, setLoading } from './actions';

function* getPokemonListSaga({ limit }) {
  const pokemonServices = new PokemonServices();
  yield put(setLoading(true));
  try {
    const res = yield call(pokemonServices.getPokemon, limit);
    if (res.status === 200) {
      yield put(setListPokemon(res.data.results));
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(setLoading(false));
  }
}

export default function* homePageSaga() {
  yield all([takeLatest(GET_LIST_POKEMON, getPokemonListSaga)]);
}
