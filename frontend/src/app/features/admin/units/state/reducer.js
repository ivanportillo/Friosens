import { combineReducers } from 'redux';

import * as constants from 'features/admin/units/actions/constants';

function units(state = [], action) {
  switch (action.type) {
    case constants.RECEIVE_UNITS:
      return action.units;
    default:
      return state;
  }
}

function isLoading(state = false, action) {
  switch (action.type) {
    case constants.FETCH_UNITS:
      return true;
    case constants.RECEIVE_UNITS:
      return false;
    default:
      return state;
  }
}

const unitsReducer = combineReducers({
  units,
  isLoading,
});

export default unitsReducer;
