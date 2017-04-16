'use strict';

module.exports = alarmEntity => {
  const findByUnitId = (unitId, limit, cb) => {
    const alarmsLimit = parseInt(limit);
    const query = { unit_id: unitId };
    alarmEntity.find(query, alarmsLimit, cb);
  };

  const create = (alarm, cb) => {
    alarmEntity.create(alarm, cb);
  };

  return { findByUnitId, create };
};
