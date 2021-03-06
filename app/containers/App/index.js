/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PokemonHomePage from 'containers/PokemonHomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import 'antd/dist/antd.css';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={PokemonHomePage} />
      <Route path="/features" component={FeaturePage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  );
}
