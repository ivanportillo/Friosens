'use strict';

module.exports = UnitEntity => {
  const create = (unit, facilityId, cb) => {
    unit.facility_id = facilityId;
    UnitEntity.create(unit, cb);
  };

  const findByFacilityId = (facilityId, cb) => {
    const query = { facility_id: facilityId };
    UnitEntity.find(query, cb);
  };

  return { create, findByFacilityId };
};
