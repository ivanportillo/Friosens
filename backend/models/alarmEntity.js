'use strict';

module.exports = (orm, db) => {
  const Alarm = db.define('alarm', {
    created_at: { type: 'date', required: true, time: true },
    title: { type: 'text', required: true },
    description: { type: 'text', required: true },
    active: { type: 'boolean' }
  },{
    hooks: {
      beforeValidation: function () {
        this.created_at = new Date();
      }
    }
  });

  Alarm.hasOne('reading', db.models.reading, { required: true, reverse: 'alarms' });
  Alarm.hasOne('unit', db.models.unit, { required: true, reverse: 'units' });
};
