'use strict';

const tokenManager = require('../../services/user').tokenManager;
const UnauthorizedError = require('spur-errors').UnauthorizedError;

const allowAccess = (req, res, next) => {
  const { authorization } = req.headers;
  if(authorization) {
    tokenManager.verify(authorization, (err, payload) => {
      if (err) return res.status(500).send({ error: err.message });
      else {
        req.payload = payload;
        next();
      }
    });
  } else {
    const error = UnauthorizedError.create('Token is required');
    res.status(error.statusCode).json({ error: error.message });
  }
};

module.exports = allowAccess;