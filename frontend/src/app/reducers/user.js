import { combineReducers } from 'redux';
import * as constants from 'actions/user/constants';

export function facilities(state = [], action) {
  switch (action.type) {
    case constants.RECEIVE_FACILITIES:
      return action.facilities;
    default:
      return state;
  }
}

export function isLoadingFacilities(state = false, action) {
  switch (action.type) {
    case constants.FETCH_FACILITIES:
      return true;
    case constants.RECEIVE_FACILITIES:
    case constants.RECEIVE_FACILITIES_FAILED:
      return false;
    default:
      return state;
  }
}

const userReducer = combineReducers({
  facilities,
  isLoadingFacilities,
});

export default userReducer;
