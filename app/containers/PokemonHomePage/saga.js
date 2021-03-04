import { all, call, put, takeLatest } from 'redux-saga/effects';
import PokemonServices from '../../services/pokemon';
import { GET_LIST_POKEMON_ACTION } from './constants';
import { setListPokemonAction, setLoadingAction } from './actions';

function* getPokemonListSaga({ limit }) {
  const pokemonServices = new PokemonServices();
  yield put(setLoadingAction(true));
  try {
    const res = yield call(pokemonServices.getPokemon, limit);
    if (res.status === 200) {
      yield put(setListPokemonAction(res.data.results));
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(setLoadingAction(false));
  }
}

export default function* employeeListPageSaga() {
  yield all([takeLatest(GET_LIST_POKEMON_ACTION, getPokemonListSaga)]);
}
