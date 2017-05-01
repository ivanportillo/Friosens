'use strict';

module.exports = userRepository => {
  const _getUsers = (cb) => {
    userRepository.getAll(cb);
  };

  return (callback) => _getUsers(callback);
};
