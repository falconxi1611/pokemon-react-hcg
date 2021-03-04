/**
 *
 * Asynchronously loads the component for PokemonDetail
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
