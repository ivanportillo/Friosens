'use strict';

const async = require('async');

module.exports = FacilityEntity => {
  const create = (facility, organizationId, cb) => {
    facility.organization_id = organizationId;
    FacilityEntity.create(facility, cb);
  };

  const findOneById = (facilityId, cb) => {
    const query = { id: facilityId };
    FacilityEntity.one(query, cb);
  };

  const findById = (facilityId, cb) => {
    const query = { id: facilityId };
    FacilityEntity.find(query, cb);
  };

  const findByOrganizationId = (organizationId, cb) => {
    const query = { organization_id: organizationId };
    FacilityEntity.find(query, (err, facilities) => {
      if(err) cb(err);
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

  const removeByOrganizationId = (organizationId, cb) => {
    const query = { organization_id: organizationId };
    FacilityEntity.find(query, (err, facilities) => {
      if (err) cb(err);
      else {
        async.each(facilities, (facility, done) => {
          facility.remove(done);
        }, cb);
      }
    });
  };

  return {
    create,
    findByOrganizationId,
    removeById,
    findById,
    findOneById,
    removeByOrganizationId
  };
};
