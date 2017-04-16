'use strict';

module.exports = alarmEntity => {
  const findByUnitId = (unitId, cb) => {
    const query = { unit_id: unitId };
    alarmEntity.find(query, cb);
  };

  const create = (alarm, cb) => {
    alarmEntity.create(alarm, cb);
  };

  return { findByUnitId, create };
};
