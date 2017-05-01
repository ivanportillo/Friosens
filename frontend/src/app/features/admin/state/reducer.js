import { combineReducers } from 'redux';

import organizationsReducer from 'features/admin/organizations/state/reducer';

const adminReducer = combineReducers({
  organizations: organizationsReducer,
});

export default adminReducer;
