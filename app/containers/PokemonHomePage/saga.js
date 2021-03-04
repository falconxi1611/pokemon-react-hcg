import { all, call, put, takeLatest } from 'redux-saga/effects';
import PokemonServices from '../../services/pokemon';
import { GET_LIST_POKEMON_ACTION } from './constants';
import { setListPokemonAction, setLoadingAction } from './actions';

function* getPokemonListSaga() {
  const pokemonServices = new PokemonServices();
  yield put(setLoadingAction(true));
  try {
    const res = yield call(pokemonServices.getPokemon);
    if (res.status === 200) {
      const arrResult = [];
      const arrRes = res.data.results;
      for (let i = 0; i < arrRes.length; i += 1) {
        const res2 = yield call(pokemonServices.getImagePokemon, arrRes[i].url);
        console.log(res2);
        arrResult.push({
          name: arrRes[i].name,
          image: res2.data.sprites.other['official-artwork'].front_default,
          base_experience: res2.data.base_experience,
          height: res2.data.height,
          weight: res2.data.weight,
          types: res2.data.types,
        });
      }

      yield put(setListPokemonAction(arrResult));
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
