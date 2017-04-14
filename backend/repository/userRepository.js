'use strict';

const async = require('async');

module.exports = UserEntity => {
  const findOneById = (id, cb) => {
    const query = { id };
    UserEntity.one(query, cb);
  };

  const findById = (userId, cb) => {
    const query = { id: userId };
    UserEntity.find(query, cb);
  };

  const findByEmail = (email, cb) => {
    const query = { email };
    UserEntity.one(query, cb);
  };

  const create = (user, cb) => {
    UserEntity.create(user, cb);
  };

  const removeByOrganizationId = (organizationId, cb) => {
    const query = { organization_id: organizationId };
    UserEntity.find(query, (err, users) => {
      if (err) cb(err);
      else {
        async.each(users, (user, done) => {
          user.remove(done);
        }, cb);
      }
    });
  };

  return { findOneById, create, findByEmail, findById, removeByOrganizationId };
};
