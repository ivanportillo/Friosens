import { combineReducers } from 'redux';
import * as constants from 'actions/user/constants';

export function units(state = {}, action) {
  switch (action.type) {
    case constants.RECEIVE_UNITS:
      return {
        ...state,
        [action.facilityId]: action.units,
      };
    default:
      return state;
  }
}

export function isLoading(state = false, action) {
  switch (action.type) {
    case constants.FETCH_UNITS:
      return true;
    case constants.RECEIVE_UNITS:
    case constants.RECEIVE_UNITS_FAILED:
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
