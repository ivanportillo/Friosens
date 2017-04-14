'use strict';

module.exports = (orm, db) => {
  const Reading = db.define('reading', {
    created_at: { type: 'date', required: true, time: true },
    discharge_pressure: { type: 'number' },
    suction_pressure: { type: 'number' },
    in_temp_condenser: { type: 'number' },
    out_temp_condenser: { type: 'number' },
    in_temp_evaporator: { type: 'number' },
    out_temp_evaporator: { type: 'number' },
    current_1: { type: 'number' },
    current_2: { type: 'number' },
    current_3: { type: 'number' }
  },{
    hooks: {
      beforeValidation: function () {
        this.created_at = new Date();
      }
    }
  });

  Reading.hasOne('Unit', db.models.unit, { required: true, reverse: 'readings' });
};
