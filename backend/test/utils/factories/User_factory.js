const userServices = require('../../../services/user');
const config = require('config');

module.exports = () => {
  const _createUser = (user, cb) => {
    userServices.createUser(user, cb);
  };

  const _createToken = (payload, cb) => {
    userServices.tokenManager.create(payload, config.app.token.ttl, cb);
  };

  const createLogged = (user, cb) => {
    _createUser(user, (err, userCreated) => {
        const userPayload = {
          id: userCreated.id,
          email: userCreated.email,
          admin: userCreated.admin,
          organization_id: userCreated.organization_id
        };
        if (err) cb(err);
        else _createToken(userPayload, (err, token) => {
            if (err) cb(err);
            else cb(null, token);
        });
    });
  };

  return { createLogged };
};