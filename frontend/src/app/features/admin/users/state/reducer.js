import { combineReducers } from 'redux';

import * as constants from 'features/admin/users/actions/constants';

function users(state = [], action) {
  switch (action.type) {
    case constants.RECEIVE_USERS:
      return action.users;
    default:
      return state;
  }
}

function isLoading(state = false, action) {
  switch (action.type) {
    case constants.FETCH_USERS:
      return true;
    case constants.RECEIVE_USERS:
      return false;
    default:
      return state;
  }
}

const usersReducer = combineReducers({
  users,
  isLoading,
});

export default usersReducer;
