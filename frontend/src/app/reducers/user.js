import { combineReducers } from 'redux';

import facilitiesReducer from './user/facilities';
import unitsReducer from './user/units';

const userReducer = combineReducers({
  facilities: facilitiesReducer,
  units: unitsReducer,
});

export default userReducer;
