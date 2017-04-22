import { fork } from 'redux-saga/effects';

import { watchAuth } from './auth';
import { watchUser } from './user';

export default function* rootSaga() {
  yield fork(watchAuth);
  yield fork(watchUser);
}
