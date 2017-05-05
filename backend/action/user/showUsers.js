'use strict';

const map = require('async').map;

module.exports = userRepository => {
  const _getUsers = (cb) => {
    userRepository.getAll((err, users) => {
      if (err) cb(err);
      else {
        map(users, (user, next) => {
          user.getOrganization((err, organization) => {
            if (err) next(err);
            else {
              user.organization = organization;
              next(null, user);
            }
          });
        }, (err, result) => {
          if (err) cb(err);
          else cb(null, result);
        });
      }
    });
  };

  return (callback) => _getUsers(callback);
};
