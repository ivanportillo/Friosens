module.exports = (orm, db) => {
  const Unit = db.define('unit', {
    name: { type: 'text', required: true },
    location: { type: 'text' },
    refrigerant: { type: 'text' }, //Pending to be a ENUM
    mark: { type: 'text' },
    model: { type: 'text' },
    serial_number: { type: 'text' }
  });

  Unit.hasOne('facility', db.models.facility, { required: true, reverse: 'units' });
};
