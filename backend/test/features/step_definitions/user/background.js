'use strict';

const { defineSupportCode } = require('cucumber');
const async = require('async');

const repositories = require('../../../../repository');
const userRepository = repositories.User;
const encrypt = require('../../../../infrastructure/passEncrypt');

defineSupportCode(({ Given }) => {
    Given(/^there is the following users:$/, function (table, callback) {
        const users = table.hashes();
        async.each(users, (user, done) => {
            encrypt.encrypt(user.password, (err, hash, salt) => {
                if(err) done(err);
                else {
                    user.salt = salt;
                    user.password = hash;
                    user.enabled = (user.enabled === 'true');
                    userRepository.create(user, err => {
                        if (err) done(err);
                        else done();
                    });
                }
            });
        }, callback);
    });
});