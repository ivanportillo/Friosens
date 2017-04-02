'use strict';

const facilitiesActions = require('../../action/facility');
const createFacility = facilitiesActions.createFacility;
const removeFacility = facilitiesActions.removeFacility;
const config = require('config');

module.exports = {
  createFacility: (req, res) => {
    const facility = {
      name: req.body.name,
      location: req.body.location
    };

    createFacility(facility, req.body.userId, (err, facility) => {
      if(err) res.status(500).send({
        message: err,
        error: true
      });
      res.status(200).send({
        item: facility,
        message: '',
        error: false
      });
    });
  },
  removeFacility: (req, res) => {
    removeFacility(req.params.id, err => {
      if(err) res.status(500).send({
        message: err,
        error: true
      });
      res.status(200).send({
        message: "Removed",
        error: false
      });
    });
  },
  updateFacility: (req, res) => {
    
  }
};
