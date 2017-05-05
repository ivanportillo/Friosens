'use strict';

const waterfall = require('async').waterfall;
const ValidationError = require('spur-errors').ValidationError;

module.exports = (UserRepository, encrypt) => {
    const _validateFields = (user, cb) => {
        const {
            first_name,
            last_name,
            email,
            password,
            admin,
            organization_id
        } = user;
        const error = msg => cb(ValidationError.create(msg));
        // http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
        const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!email) error('Email is required');
        else if(!emailRegex.test(email)) error('Invalid email');
        else if(!first_name) error('First name is required');
        else if(!last_name) error('Last name is required');
        else if(!password) error('Password is required');
        else if(organization_id && admin) error('An administrator cant have a organization');
        else if(!organization_id && !admin) error('A user should have a organization or be admin');
        else cb();
        // TO-DO: More validation
    };

    const _encryptPassword = (user, cb) => {
        encrypt.encrypt(user.password, (err, hash, salt) => {
           if (err) cb(err);
           else {
               user.password = hash;
               user.salt = salt;
               cb(null, user);
           }
        });
    };

    const _saveUser = (user, cb) => {
        user.enabled = 1;
        UserRepository.create(user, cb);
    };

    return (user, callback) => waterfall([
       next => _validateFields(user, next),
       next => _encryptPassword(user, next),
       (finalUser, next) => _saveUser(finalUser, next)
    ], callback);
};