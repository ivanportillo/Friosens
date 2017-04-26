import { combineReducers } from 'redux';

import facilitiesReducer from 'features/facilities/state/reducer';
import unitsReducer from 'features/units/state/reducer';
import alarmsReducer from './user/alarms';

const userReducer = combineReducers({
  facilities: facilitiesReducer,
  units: unitsReducer,
  alarms: alarmsReducer,
});

export default userReducer;
