import { combineReducers } from 'redux';
import * as constants from 'actions/user/constants';

export function alarms(state = {}, action) {
  switch (action.type) {
    case constants.RECEIVE_ALARMS:
      return {
        ...state,
        [action.unitId]: action.alarms,
      };
    default:
      return state;
  }
}

export function isLoading(state = false, action) {
  switch (action.type) {
    case constants.FETCH_ALARMS:
      return true;
    case constants.RECEIVE_ALARMS:
    case constants.RECEIVE_ALARMS_FAILED:
      return false;
    default:
      return state;
  }
}

const alarmsReducer = combineReducers({
  alarms,
  isLoading,
});

export default alarmsReducer;

