'use strict';

const userService = require('../../services/user');

const signin = require('./signin');

module.exports = {
    signin: signin(userService)
};