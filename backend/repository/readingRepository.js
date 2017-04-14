'use strict';

module.exports = ReadingEntity => {
  const create = (reading, cb) => {
    ReadingEntity.create(reading, cb);
  };

  const findByUnitId = (unitId, cb) => {
    const query = { unit_id: unitId };
    ReadingEntity.find(query, cb);
  };

  return { create, findByUnitId };
};
