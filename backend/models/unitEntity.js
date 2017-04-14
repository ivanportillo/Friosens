'use strict';

module.exports = (orm, db) => {
  const Unit = db.define('unit', {
    name: { type: 'text', required: true },
    location: { type: 'text' },
    refrigerant: { type: 'text', required: true },
    mark: { type: 'text' },
    unit_model: { type: 'text' },
    serial_number: { type: 'text' },
    token: { type: 'text' }
  });

  Unit.hasOne('facility', db.models.facility, { required: true, reverse: 'units' });
};
