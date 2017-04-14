'use strict';

module.exports = UnitEntity => {
  const create = (unit, facilityId, cb) => {
    unit.facility_id = facilityId;
    UnitEntity.create(unit, cb);
  };
  
  const findOneById = (unitId, cb) => {
    const query = { id: unitId };
    UnitEntity.one(query, cb);
  };

  const findByFacilityId = (facilityId, cb) => {
    const query = { facility_id: facilityId };
    UnitEntity.find(query, cb);
  };

  const findByFacilityAndUnitId = (facilityId, unitId, cb) => {
    const query = { id: unitId, facility_id: facilityId };
    UnitEntity.find(query, cb);
  };

  const findByName = (name, cb) => {
    const query = { name };
    UnitEntity.one(query, cb);
  };

  const remove = (unitId, cb) => {
    const query = {id: unitId};
    UnitEntity.find(query).remove(cb);
  };

  return {
    create,
    findByFacilityId,
    findByFacilityAndUnitId,
    remove,
    findByName,
    findOneById
  };
};
