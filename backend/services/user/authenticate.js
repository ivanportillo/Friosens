'use strict';

const waterfall = require('async').waterfall;
const UnauthorizedError = require('spur-errors').UnauthorizedError;

module.exports = (UserRepository, encrypt) => {
  const _findAccount = (email, cb) => {
    UserRepository.findByEmail(email, (err, user) => {
        if (err) cb(err);
        else if(!user) cb(new UnauthorizedError.create('Invalid user'));
        else cb(null, user);
    });
  };

  const _validatePassword = (user, password, cb) => {
    encrypt.compareEncrypted(password, user.password, user.salt, (err, correct) => {
        if (err) cb(err);
        else if(!correct) cb(new UnauthorizedError.create('Incorrect password'));
        else cb(null, user);
    });
  };

  const _checkEnabled = (user, cb) => {
    if(user.enabled) cb(null, user);
    else cb(new UnauthorizedError.create('User disabled'));
  };

  return (email, password, callback) => waterfall([
      next => _findAccount(email, next),
      (user, next) => _validatePassword(user, password, next),
      (user, next) => _checkEnabled(user, next)
  ], callback);
};