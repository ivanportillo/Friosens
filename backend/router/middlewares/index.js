'use strict';

const allowAccess = require('./allowAccess');

module.exports = {
  allowAccessAdmin: allowAccess({ admin: true }),
  allowAccessUser: allowAccess({ admin: false })
};
