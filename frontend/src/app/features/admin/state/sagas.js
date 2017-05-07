import { fork } from 'redux-saga/effects';

import { watchOrganizations } from 'features/admin/organizations/state/sagas';
import { watchUsers } from 'features/admin/users/state/sagas';
import { watchFacilities } from 'features/admin/facilities/state/sagas';
import { watchUnits } from 'features/admin/units/state/sagas';

export function* watchAdmin() {
  yield [
    fork(watchOrganizations),
    fork(watchUsers),
    fork(watchFacilities),
    fork(watchUnits),
  ];
}
