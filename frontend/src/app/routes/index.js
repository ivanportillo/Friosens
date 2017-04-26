import React from 'react';

import Login from 'features/auth/containers/Login';
import FacilitiesContent from 'features/facilities/containers/FacilitiesContent';
import UnitsContent from 'features/units/containers/UnitsContent';
import UnitContent from '../features/unit/containers/UnitContent';

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
