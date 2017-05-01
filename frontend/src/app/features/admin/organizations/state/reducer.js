import { combineReducers } from 'redux';

import * as constants from 'features/admin/organizations/actions/constants';

function organizations(state = [], action) {
  switch (action.type) {
    case constants.RECEIVE_ORGANIZATIONS:
      return action.organizations;
    default:
      return state;
  }
}

function isLoading(state = false, action) {
  switch (action.type) {
    case constants.FETCH_ORGANIZATIONS:
      return true;
    case constants.RECEIVE_ORGANIZATIONS:
      return false;
    default:
      return state;
  }
}

const organizationsReducer = combineReducers({
  organizations,
  isLoading,
});

export default organizationsReducer;
