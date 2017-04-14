'use strict';

const tokenManager = require('../../services/unit').tokenManager;
const UnauthorizedError = require('spur-errors').UnauthorizedError;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if(authorization) {
    tokenManager.verify(authorization, (err, payload) => {
      if (err) return res.status(err.statusCode).send({ error: err.message });
      else {
        if(payload.device) {
          req.payload = payload;
          next();
        } else {
          const error = UnauthorizedError.create('Access allowed only to devices');
          res.status(error.statusCode).json({ error: error.message });
        }
      }
    });
  } else {
    const error = UnauthorizedError.create('Token is require');
    res.status(error.statusCode).json({ error: error.message });
  }
};
