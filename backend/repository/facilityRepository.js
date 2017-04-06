'use strict';

module.exports = FacilityEntity => {
  const create = (facility, userId, cb) => {
    facility.user_id = userId;
    FacilityEntity.create(facility, cb);
  };

  const findById = (facilityId, cb) => {
    const query = { id: facilityId };
    FacilityEntity.one(query, cb);
  };

  const findByUserId = (userId, cb) => {
    const query = { user_id: userId };
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

  return { create, findByUserId, removeById, findById };
};
