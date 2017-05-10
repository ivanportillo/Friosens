import { combineReducers } from 'redux';
import * as constants from 'features/layout/actions/constants';

function drawer(state = false, action) {
  switch (action.type) {
    case constants.SHOW_DRAWER:
      return true;
    case constants.HIDE_DRAWER:
      return false;
    default:
      return state;
  }
}

function tokenDialog(state = false, action) {
  switch (action.type) {
    case constants.OPEN_TOKEN_DIALOG:
      return true;
    case constants.CLOSE_TOKEN_DIALOG:
      return false;
    default:
      return state;
  }
}

const uiReducer = combineReducers({
  drawer,
  tokenDialog,
});

export default uiReducer;
