'use strict';

const readingActions = require('../../action/reading');
const registerReading = readingActions.registerReading;

const responseBuilder = require('../../utils/responseBuilder');

module.exports = {
  registerReading: (req, res) => {
    const reading = {
      discharge_pressure: req.body.discharge_pressure,
      suction_pressure: req.body.suction_pressure,
      in_temp_condenser: req.body.in_temp_condenser,
      out_temp_condenser: req.body.out_temp_condenser,
      in_temp_evaporator: req.body.in_temp_evaporator,
      out_temp_evaporator: req.body.out_temp_evaporator,
      current_1: req.body.current_1,
      current_2: req.body.current_2,
      current_3: req.body.current_3
    };
    registerReading(req.payload.id, reading, responseBuilder.createResponse(req, res));
  }
};
