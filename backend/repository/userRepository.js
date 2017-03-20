'use strict';

module.exports = (userEntity) => {
  const findUserByName = (name, cb) => {
    const query = { first_name: name };
    userEntity.find(query, cb);
  };

  return { findUserByName };
};
