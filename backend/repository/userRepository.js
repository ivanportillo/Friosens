'use strict';

module.exports = UserEntity => {
  const findOneById = (id, cb) => {
    const query = { id };
    UserEntity.one(query, cb);
  };

  const findByEmail = (email, cb) => {
    const query = { email };
    UserEntity.one(query, cb);
  };

  const create = (user, cb) => {
    UserEntity.create(user, cb);
  };

  return { findOneById, create, findByEmail };
};
