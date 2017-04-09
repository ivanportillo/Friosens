'use strict';

const allowAccess = require('./allowAccess');
const requireAuth = require('./requireAuth');

module.exports = {
  allowAccessAdmin: allowAccess({ admin: true }),
  allowAccessUser: allowAccess({ admin: false }),
  requireAuth
};
