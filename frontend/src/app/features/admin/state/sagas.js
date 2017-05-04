import { fork } from 'redux-saga/effects';

import { watchOrganizations } from 'features/admin/organizations/state/sagas';
import { watchUsers } from 'features/admin/users/state/sagas';

export function* watchAdmin() {
  yield [
    fork(watchOrganizations),
    fork(watchUsers),
  ];
}
