'use strict';

const PATHS = require('./paths');
const facilitiesController = require('./controllers/facilities');
const usersController = require('./controllers/users');

const middlewares = require('./middlewares');
const allowAccessAdmin = middlewares.allowAccessAdmin;
const allowAccessUser = middlewares.allowAccessUser;

module.exports = router => {
  // FACILITY
  router.post(PATHS.FACILITIES_PATH, allowAccessAdmin, facilitiesController.createFacility);
  router.get(PATHS.FACILITIES_PATH, allowAccessUser, facilitiesController.showFacilities);
  router.delete(PATHS.FACILITY_PATH, allowAccessAdmin, facilitiesController.removeFacility);

  // AUTH
  router.post(PATHS.LOGIN_PATH, usersController.login);
  router.post(PATHS.REGISTER_PATH, allowAccessAdmin, usersController.register);

  return router;
};
