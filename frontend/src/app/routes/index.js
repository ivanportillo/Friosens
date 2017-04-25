import React from 'react';

import Login from 'containers/Login';
import FacilitiesContent from 'containers/FacilitiesContent';
import UnitsContent from 'containers/UnitsContent';
import UnitContent from 'containers/UnitContent';

import { Switch } from 'react-router-dom';


import createRoute from './routeCreators/route';
import facilityRouteCreator from './routeCreators/facilityRoute';

import * as PATHS from './paths';

const createRoutes = (store) => {
  const Route = createRoute(store);
  const FacilityRoute = facilityRouteCreator(Route);

  return (
    <Switch>
      <FacilityRoute exact needAuth component={FacilitiesContent} path={PATHS.ROOT_PATH.url} />
      <FacilityRoute exact needAuth component={UnitsContent} path={PATHS.UNITS_PATH.url} />
      <FacilityRoute needAuth component={UnitContent} path={PATHS.UNIT_PATH.url} />
      <Route needAuth={false} component={Login} path={PATHS.LOGIN_PATH.url} />
    </Switch>);
};


export default createRoutes;
