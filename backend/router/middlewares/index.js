'use strict';

const allowAccess = require('./allowAccess');
const requireAuth = require('./requireAuth');
const onlyDevice = require('./onlyDevice');

module.exports = {
  allowAccessAdmin: allowAccess({ admin: true }),
  allowAccessUser: allowAccess({ admin: false }),
  requireAuth,
  onlyDevice
};
