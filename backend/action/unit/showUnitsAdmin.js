'use strict';

const map = require('async').map;

module.exports = unitRepository => {
  const _getUnits = (cb) => {
    unitRepository.getAll((err, units) => {
      if (err) cb(err);
      else {
        map(units, (unit, next) => {
          unit.getFacility((err, facility) => {
            if (err) next(err);
            else {
              unit.facility = facility;
              next(null, unit);
            }
          });
        }, (err, units) => {
          if (err) cb(err);
          else cb(null, units);
        });
      }
    });
  };

  return callback => _getUnits(callback);
};
