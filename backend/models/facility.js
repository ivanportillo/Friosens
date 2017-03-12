module.exports = (orm, db) => {
  const Facility = db.define('facility', {
    name: { type: 'text', required: true },
    location: { type: 'text' }
  });

  Facility.hasOne('user', db.models.user, { required: true, reverse: 'facilites' });
};
