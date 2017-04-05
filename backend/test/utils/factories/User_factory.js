const userRepository = require('../../../repository').User;
const userServices = require('../../../services/user');
const config = require('config');

module.exports = () => {
  const _createUser = (user, cb) => {
    userRepository.create(user, cb);
  };

  const _createToken = (payload, cb) => {
    userServices.tokenManager.create(payload, config.app.token.ttl, cb);
  };

  const createLogged = (user, cb) => {
    _createUser(user, (err, userCreated) => {
        if (err) cb(err);
        else _createToken({ id: userCreated.id, email: userCreated.email, admin: userCreated.admin }, (err, token) => {
            if (err) cb(err);
            else cb(null, token);
        });
    });
  };

  return { createLogged };
};