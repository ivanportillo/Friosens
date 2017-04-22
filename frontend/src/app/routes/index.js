import React from 'react';

import Login from 'containers/Login';
import FacilityContent from 'containers/FacilityContent';

import { Switch } from 'react-router-dom';


import createRoute from './routeCreators/route';
import facilityRouteCreator from './routeCreators/facilityRoute';

import * as PATHS from './paths';

const createRoutes = (store) => {
  const Route = createRoute(store);
  const FacilityRoute = facilityRouteCreator(Route);

  return (
    <Switch>
      <FacilityRoute exact needAuth component={FacilityContent} path={PATHS.ROOT_PATH} />
      <Route needAuth={false} component={Login} path={PATHS.LOGIN_PATH} />
    </Switch>);
};


export default createRoutes;
