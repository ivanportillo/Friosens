import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import authReducer from 'features/auth/state/reducer';
import uiReducer from 'features/layout/state/reducer';

import facilitiesReducer from 'features/facilities/state/reducer';
import unitsReducer from 'features/units/state/reducer';
import unitReducer from 'features/unit/state/reducer';
import adminReducer from 'features/admin/state/reducer';

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  auth: authReducer,
  ui: uiReducer,
  user: combineReducers({
    facilities: facilitiesReducer,
    units: unitsReducer,
    unit: unitReducer,
  }),
  admin: adminReducer,
});

