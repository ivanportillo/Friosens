import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import authReducer from 'features/auth/state/reducer';

import facilitiesReducer from 'features/facilities/state/reducer';
import unitsReducer from 'features/units/state/reducer';
import unitReducer from 'features/unit/state/units';

import uiReducer from './ui';

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
});

