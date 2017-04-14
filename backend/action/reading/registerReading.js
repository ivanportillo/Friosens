'use strict';

module.exports = readingRepository => {
  const _registerReading = (unitId, reading, cb) => {
    reading.unit_id = unitId;
    readingRepository.create(reading, (err, reading) => {
      if (err) cb(err);
      else cb(null, reading, "Reading registered");
    });
  };

  return (unitId, reading, callback) => _registerReading(unitId, reading, callback);
};
