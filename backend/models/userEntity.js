'use strict';

module.exports = (orm, db) => {
  const User = db.define('user', {
    first_name: { type: 'text', required: true },
    last_name: { type: 'text', required: true },
    telephone: { type: 'text' },
    enabled: { type: 'boolean', required: true },
    admin: { type: 'boolean', required: true },
    email: { type: 'text', required: true },
    createdAt: { type: 'date', required: true, time: true },
    password: { type: 'text', required: true },
    salt: { type: 'text', required: true },
    last_login: { type: 'date', time: true }
  },{
    hooks: {
      beforeValidation: function () {
        this.createdAt = new Date();
      }
    }
  });

  User.hasOne('organization', db.models.organization, { reverse: 'users' });
};
