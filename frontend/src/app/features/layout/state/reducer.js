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

const uiReducer = combineReducers({
  drawer,
});

export default uiReducer;
