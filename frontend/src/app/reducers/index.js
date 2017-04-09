import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import authReducer from './auth';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  auth: authReducer,
});


