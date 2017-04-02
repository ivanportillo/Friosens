'use strict';

const NotFoundError = require('spur-errors').NotFoundError;

module.exports = facilityRepository => {
  const _findFacility = facilityId => {
    facilityRepository.findById(facilityId, (err, facility) => {
      if (err) cb(err);
      else if (!facility) cb(NotFoundError.create('Facility Not Found'));
      else cb(null, facility);
    });
  };

};
