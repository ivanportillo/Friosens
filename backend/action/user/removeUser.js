'use strict';

const NotFoundError = require('spur-errors').NotFoundError;
const waterfall = require('async').waterfall;

module.exports = (userRepository) => {
  const _getUser = (userId, cb) => {
    userRepository.findOneById(userId, (err, user) => {
      if (err) cb(err);
      else if(!user) cb(NotFoundError.create('User not found'));
      else cb(null, user);
    });
  };

  const _removeUser = (user, cb) => {
    user.remove(err => {
      if (err) cb(err);
      else cb(null, null, "User removed");
    });
  };

  return (userId, callback) => waterfall([
    next => _getUser(userId, next),
    (user, next) => _removeUser(user, next)
  ], callback);
};