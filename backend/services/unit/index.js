'use strict';

const tokenService = require('../../infrastructure/tokenService');
const createTokenManager = require('./tokenManager');

module.exports = {
  tokenManager: createTokenManager(tokenService),
};
