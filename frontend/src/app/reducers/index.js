import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
});

