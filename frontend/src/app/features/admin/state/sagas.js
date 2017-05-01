import { fork } from 'redux-saga/effects';

import { watchOrganizations } from 'features/admin/organizations/state/sagas';

export function* watchAdmin() {
  yield fork(watchOrganizations);
}
