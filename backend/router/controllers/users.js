'use strict';

const usersActions = require('../../action/user');
const signin = usersActions.signin;
const register = usersActions.register;

module.exports = {
  login: (req, res) => {
    signin(req.body.email, req.body.password, (err, token) => {
        if(err) res.status(err.statusCode).json({ error: err.message });
        else { res.json({ token }); }
    });
  },
  register: (req, res) => {
    const user = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        company: req.body.company,
        address: req.body.address,
        telephone: req.body.telephone,
        admin: req.body.admin,
        email: req.body.email,
        password: req.body.password,
    };
    register(user, (err, result) => {
       if(err) res.status(err.statusCode).json({ error: err.message });
       else { res.json(result); }
    });
  }
};