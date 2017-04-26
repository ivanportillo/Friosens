import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import authReducer from 'features/auth/state/reducer';
import uiReducer from './ui';
import userReducer from './user';

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  auth: authReducer,
  ui: uiReducer,
  user: userReducer,
});

