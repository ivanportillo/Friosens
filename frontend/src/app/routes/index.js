import React from 'react';
import { Route } from 'react-router';
import Login from 'components/Login';

const routes = () =>
  <Route path="/" component={Login} />;

export default routes;
