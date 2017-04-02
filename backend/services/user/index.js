'use strict';

const authenticate = require('./authenticate');
const tokenManager = require('./tokenManager');

const userRepository = require('../../repository').User;
const encrypt = require('../../infrastructure/passEncrypt');
const tokenService = require('../../infrastructure/tokenService');

module.exports = {
  authenticate: authenticate(userRepository, encrypt),
  tokenManager: tokenManager(tokenService)
};