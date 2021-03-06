'use strict';

const usersActions = require('../../action/user');
const signin = usersActions.signin;
const register = usersActions.register;
const getAccount = usersActions.getAccount;
const removeUser = usersActions.removeUser;
const showUsers = usersActions.showUsers;

const responseBuilder = require('../../utils/responseBuilder');

module.exports = {
  login: (req, res) => {
    signin(req.body.email, req.body.password, responseBuilder.createResponse(req, res));
  },
  register: (req, res) => {
    const user = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        company: req.body.company,
        address: req.body.address,
        telephone: req.body.telephone,
        admin: req.body.admin ? JSON.parse(req.body.admin) : false,
        email: req.body.email,
        password: req.body.password,
        organization_id: req.body.organization_id
    };
    register(user, responseBuilder.createResponse(req, res));
  },
  getAccount: (req, res) => {
    getAccount(req.payload.id, responseBuilder.createResponse(req, res));
  },
  removeUser: (req, res) => {
    removeUser(req.params.user, responseBuilder.createResponse(req, res));
  },
  showUsers: (req, res) => {
    showUsers(responseBuilder.createResponse(req, res));
  }
};