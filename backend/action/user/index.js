'use strict';

const userService = require('../../services/user');
const userRepository = require('../../repository').User;

const createSignin = require('./signin');
const createRegister = require('./register');
const createGetAccount = require('./getAccount');

module.exports = {
    signin: createSignin(userService),
    register: createRegister(userService),
    getAccount: createGetAccount(userRepository),
};