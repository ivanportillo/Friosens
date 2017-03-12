import React from 'react';
import { Route, IndexRoute } from 'react-router';

const routes = () =>
  <Route path="/" component={<p>Holi</p>}>
    <IndexRoute component={<p>Holu</p>} />
  </Route>;

export default routes;
