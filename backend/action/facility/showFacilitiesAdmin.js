'use strict';

const map = require('async').map;

module.exports = (facilityRepository) => {
  const _getFacilities = cb => {
    facilityRepository.getAll((err, facilities) => {
      if (err) cb(err);
      else {
        map(facilities, (facility, next) => {
          facility.getOrganization((err, organization) => {
            if (err) next(err);
            else {
              facility.organization = organization;
              next(null, facility);
            }
          });
        }, (err, facilities) => {
          if (err) cb(err);
          else cb(null, facilities);
        });
      }
    });
  };

  return callback => _getFacilities(callback);
};