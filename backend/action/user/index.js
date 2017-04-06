'use strict';

const userService = require('../../services/user');

const createSignin = require('./signin');
const createRegister = require('./register');

module.exports = {
    signin: createSignin(userService),
    register: createRegister(userService)
};