'use strict';

const bcrypt = require('bcrypt');
const config = require('config');

const _generateSalt = (cb) => {
  bcrypt.genSalt(config.app.password.salt_rounds, (err, salt) => {
    if (err) cb(err);
    else cb(null, salt);
  });
};

const _generateHash = (password, salt, cb) => {
  bcrypt.hash(password, salt, (err, hash) => {
    if (err) cb(err);
    else cb(null, hash, salt);
  });
};

const encrypt = (password, cb) => {
  _generateSalt((err, salt) => {
    _generateHash(password, salt, (err, hash) => {
      if (err) cb(err);
      else cb(null, hash, salt)
    });
  });
};

const compareEncrypted = (passwordPlain, passwordEncrypt, salt, cb) => {
  _generateHash(passwordPlain, salt, (err, hash) => {
    if (err) cb(err);
    else cb(null, passwordEncrypt === hash);
  });
};

module.exports = {
    encrypt,
    compareEncrypted
};
