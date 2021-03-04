import { API_POKEMON } from '../utils/constants';
import AxiosInstance from './axios';

export default class EmployeeServices {
  /**
   * Get list of pokemon
   *
   * @returns List all pokemon
   */
  getPokemon = () =>
    AxiosInstance.get(`${API_POKEMON}?limit=10`)
      .then(res => res)
      .catch(err => err.response || err);

  /**
   * Get image of pokemon
   *
   * @returns List all pokemon
   */
  getImagePokemon = link =>
    AxiosInstance.get(`${link}`)
      .then(res => res)
      .catch(err => err.response || err);
}
