'use strict';

const UnauthorizedError = require('spur-errors').UnauthorizedError;

module.exports = tokenService => {
  const create = (unit, ttl, cb) => {
    const payload = { id: unit.id, device: true };
    tokenService.create(payload, ttl, (err, token) => {
      if (err) cb(err);
      else cb(null, token);
    });
  };

  const verify = (token, cb) => {
    tokenService.verify(token, (err, payload) => {
      if (err || !payload) cb(UnauthorizedError.create('Token is required'));
      else cb(null, payload);
    });
  };

  return { create, verify };
};
