'use strict';

const NotFoundError = require('spur-errors').NotFoundError;

module.exports = (userRepository) => {
  const _getAccount = (userId, cb) => {
    userRepository.findOneById(userId, (err, user) => {
      console.log(user);
      if (err) cb(err);
      else if(!user) cb(NotFoundError.create("User not found"));
      else cb(null, {
          first_name: user.first_name,
          last_name: user.last_name,
          company: user.company,
          address: user.address,
          telephone: user.telephone,
          admin: user.admin,
          email: user.email,
        });
    });
  };

  return (userId, callback) => _getAccount(userId, callback);
};