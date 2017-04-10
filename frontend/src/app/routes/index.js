import React from 'react';
import { Route } from 'react-router';

import Login from 'containers/Login';
import Layout from 'components/Layout';

import { getToken } from 'utils/token';

import { LOGIN_PATH, ROOT_PATH } from './paths';

const createRoutes = store => {
  const routes = (
    <Route>
      <Route onEnter={requiredAuthenticated}>
        <Route path="/" component={Layout} />
      </Route>
      <Route onEnter={requiredNotAuthenticated}>
        <Route path="/login" component={Login} />
      </Route>
    </Route>);

  function requiredAuthenticated(nextState, replace, fn) {
    const state = store.getState();
    if (!state.auth.user && !state.auth.isBooting){
      replace(LOGIN_PATH);
    }
    fn();
  }

  function requiredNotAuthenticated(nextState, replace, fn) {
    if (getToken()){
      replace(ROOT_PATH);
    }
    fn();
  }

  return routes;
};


export default createRoutes;
