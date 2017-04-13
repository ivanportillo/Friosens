'use strict';

module.exports = FacilityEntity => {
  const create = (facility, organizationId, cb) => {
    facility.organization_id = organizationId;
    FacilityEntity.create(facility, cb);
  };

  const findById = (facilityId, cb) => {
    const query = { id: facilityId };
    FacilityEntity.one(query, cb);
  };

  const findByOrganizationId = (organizationId, cb) => {
    const query = { organization_id: organizationId };
    FacilityEntity.find(query, (err, facilities) => {
      if(err) cb(err);
      else if(facilities.length === 1) cb(null, facilities[0]);
      else cb(null, facilities);
    });
  };

  const removeById = (facilityId, cb) => {
    const query = { id: facilityId };
    FacilityEntity.one(query, (err, facility) => {
      if(err) cb(err);
      else {
        facility.remove(cb);
      }
    });
  };

  return { create, findByOrganizationId, removeById, findById };
};
