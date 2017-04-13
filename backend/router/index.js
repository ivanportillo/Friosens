'use strict';

const PATHS = require('./paths');
const facilitiesController = require('./controllers/facilities');
const usersController = require('./controllers/users');

const middlewares = require('./middlewares');
const allowAccessAdmin = middlewares.allowAccessAdmin;
const allowAccessUser = middlewares.allowAccessUser;
const requireAuth = middlewares.requireAuth;

module.exports = router => {
  // FACILITY
  router.post(PATHS.FACILITIES_PATH, allowAccessAdmin, facilitiesController.createFacility);
  router.get(PATHS.FACILITIES_PATH, allowAccessUser, facilitiesController.showFacilities);
  router.delete(PATHS.FACILITY_PATH, allowAccessAdmin, facilitiesController.removeFacility);

  // UNITS (INSIDE FACILITY)
  router.get(PATHS.FACILITY_UNITS_PATH, allowAccessUser, facilitiesController.getUnits);
  router.post(PATHS.FACILITY_UNITS_PATH, allowAccessAdmin, facilitiesController.createUnit);
  router.delete(PATHS.FACILITY_UNIT_PATH, allowAccessAdmin, facilitiesController.removeUnit);

  // AUTH
  router.post(PATHS.LOGIN_PATH, usersController.login);
  router.post(PATHS.REGISTER_PATH, allowAccessAdmin, usersController.register);
  router.get(PATHS.ACCOUNT_PATH, requireAuth, usersController.getAccount);

  return router;
};
