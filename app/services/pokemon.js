import { API_POKEMON } from '../utils/constants';
import AxiosInstance from './axios';

export default class EmployeeServices {
  /**
   * Get list of pokemon
   *
   * @returns List all pokemon
   */
  getPokemon = limit =>
    AxiosInstance.get(`${API_POKEMON}?limit=${limit}`)
      .then(res => res)
      .catch(err => err.response || err);
}
