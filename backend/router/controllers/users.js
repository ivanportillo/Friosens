'use strict';

const usersActions = require('../../action/user');
const signin = usersActions.signin;

module.exports = {
  login: (req, res) => {
    signin(req.body.email, req.body.password, (err, token) => {
        if(err) res.status(err.statusCode).json({ error: err.message });
        else { res.json({ token }); }
    });
  }
};