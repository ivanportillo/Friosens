import React from 'react';

import Login from 'features/auth/containers/Login';
import FacilitiesContent from 'features/facilities/containers/FacilitiesContent';
import UnitsContent from 'features/units/containers/UnitsContent';
import UnitContent from 'features/unit/containers/UnitContent';

import OrganizationsList from 'features/admin/organizations/containers/OrganizationsList';
import CreateOrganization from 'features/admin/organizations/containers/CreateOrganization';

import UsersList from 'features/admin/users/containers/UsersList';
import CreateUser from 'features/admin/users/containers/CreateUser';

import FacilitiesList from 'features/admin/facilities/containers/FacilitiesList';
import CreateFacility from 'features/admin/facilities/containers/CreateFacility';

import UnitsList from 'features/admin/units/containers/UnitsList';
import CreateUnit from 'features/admin/units/containers/CreateUnit';

import Loading from 'features/layout/containers/Loading';

import { Switch } from 'react-router-dom';

import createRoute from './routeCreators/route';
import facilityRouteCreator from './routeCreators/facilityRoute';

import * as PATHS from './paths';

const createRoutes = (store) => {
  const Route = createRoute(store);
  const FacilityRoute = facilityRouteCreator(Route);

  return (
    <Loading>
      <Switch>
        <FacilityRoute
          exact
          needAuth
          component={FacilitiesContent}
          path={PATHS.FACILITIES_PATH.url}
        />
        <FacilityRoute exact needAuth component={UnitsContent} path={PATHS.UNITS_PATH.url} />
        <FacilityRoute needAuth component={UnitContent} path={PATHS.UNIT_PATH.url} />
        <Route needAuth={false} component={Login} path={PATHS.LOGIN_PATH.url} />
        <FacilityRoute
          exact
          needAdmin
          component={OrganizationsList}
          path={PATHS.ADMIN_ORGANIZATIONS_PATH.url}
        />
        <FacilityRoute
          exact
          needAdmin
          component={CreateOrganization}
          path={PATHS.ADMIN_NEW_ORGANIZATION_PATH.url}
        />
        <FacilityRoute
          exact
          needAdmin
          component={UsersList}
          path={PATHS.ADMIN_USERS_PATH.url}
        />
        <FacilityRoute
          exact
          needAdmin
          component={CreateUser}
          path={PATHS.ADMIN_NEW_USER_PATH.url}
        />
        <FacilityRoute
          exact
          needAdmin
          component={FacilitiesList}
          path={PATHS.ADMIN_FACILITIES_PATH.url}
        />
        <FacilityRoute
          exact
          needAdmin
          component={CreateFacility}
          path={PATHS.ADMIN_NEW_FACILITY_PATH.url}
        />
        <FacilityRoute
          exact
          needAdmin
          component={UnitsList}
          path={PATHS.ADMIN_UNITS_PATH.url}
        />
        <FacilityRoute
          exact
          needAdmin
          component={CreateUnit}
          path={PATHS.ADMIN_NEW_UNIT_PATH.url}
        />
      </Switch>
    </Loading>);
};


export default createRoutes;
