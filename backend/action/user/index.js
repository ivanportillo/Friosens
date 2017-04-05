'use strict';

const userService = require('../../services/user');

const signin = require('./signin');
const register = require('./register');

module.exports = {
    signin: signin(userService),
    register: register(userService)
};