import * as constants from './constants';

export function fetchUsers() {
  return {
    type: constants.FETCH_USERS,
  };
}

export function receiveUsers(users) {
  return {
    type: constants.RECEIVE_USERS,
    users,
  };
}

export function removeUser(userId) {
  return {
    type: constants.REMOVE_USER,
    userId,
  };
}

export function createUser(user) {
  return {
    type: constants.CREATE_USER,
    user,
  };
}
