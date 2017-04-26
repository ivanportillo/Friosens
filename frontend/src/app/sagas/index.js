import { fork } from 'redux-saga/effects';

import { watchAuth } from 'features/auth/state/sagas';
import { watchUser } from './user';

export default function* rootSaga() {
  yield fork(watchAuth);
  yield fork(watchUser);
}
