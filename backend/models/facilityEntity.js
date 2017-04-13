'use strict';

module.exports = (orm, db) => {
  const Facility = db.define('facility', {
    name: { type: 'text', required: true },
    location: { type: 'text' }
  });

  Facility.hasOne('organization', db.models.organization, { required: true, reverse: 'facilities' });
};
