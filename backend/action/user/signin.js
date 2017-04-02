'use strict';

const config = require('config');
const waterfall = require('async').waterfall;

module.exports = (userServices) => {
  const _authenticate = (email, password, cb) => {
    userServices.authenticate(email, password, cb);
  };

  const _generateToken = (user, cb) => {
    userServices.tokenManager.create(user, config.app.token.ttl, (err, token) => {
       if (err) cb(err);
       else cb(null, token);
    });
  };

  return (email, password, callback) => waterfall([
     next => _authenticate(email, password, next),
     (user, next) => _generateToken(user, cb)
  ], callback);
};