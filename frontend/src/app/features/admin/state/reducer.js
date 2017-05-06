import { combineReducers } from 'redux';

import organizationsReducer from 'features/admin/organizations/state/reducer';
import usersReducer from 'features/admin/users/state/reducer';
import facilitiesReducer from 'features/admin/facilities/state/reducer';

const adminReducer = combineReducers({
  organizations: organizationsReducer,
  users: usersReducer,
  facilities: facilitiesReducer,
});

export default adminReducer;
