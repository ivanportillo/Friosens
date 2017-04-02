const request = require('request');
const CONFIG = require('config');

const _request = method => (path, payload, token, done) => {
    const options = {
      url: `http://${CONFIG.app.express.host}:${CONFIG.app.express.port}${path}`,
      headers: {
        Authorization: token
      },
      json: true
    };

    if (method !== 'get') {
      options.json = (payload) ? payload : true;
    }

    request[method](options, (error, response, body) => {
      if (error) done(error);
      else done(null, body, response.statusCode);
    });
  };

module.exports = {
  put: _request('put'),
  post: _request('post'),
  get: _request('get'),
  del: _request('del')
};
