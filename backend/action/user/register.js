'use strict';

module.exports = (userServices) => {
  const _createUser = (user, cb) => {
    userServices.createUser(user, cb);
  };

  return (user, callback) => _createUser(user, callback);
};
