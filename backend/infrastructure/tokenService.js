'use strict';

const config = require('config');
const jwt = require('jsonwebtoken');

const DEFAULT_TTL = 3600;

const create = (payload, ttl = DEFAULT_TTL, cb) => {
  jwt.sign(payload, config.app.token.secret, { expiresIn: ttl }, (err, token) => {
    if (err) cb(err);
    else cb(null, token);
  });
};

const verify = (token, cb) => {
  jwt.verify(token, config.app.token.secret, (err, payload) => {
    if (err) cb(err);
    else cb(null, payload);
  });
};

module.exports = { create, verify };
