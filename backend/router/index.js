'use strict';

const PATHS = require('./paths');
const facilitiesController = require('./controllers/facilities');
const usersController = require('./controllers/users');
const organizationsController = require('./controllers/organizations');
const readingsController = require('./controllers/readings');

const middlewares = require('./middlewares');
const allowAccessAdmin = middlewares.allowAccessAdmin;
const allowAccessUser = middlewares.allowAccessUser;
const requireAuth = middlewares.requireAuth;
const onlyDevice = middlewares.onlyDevice;

module.exports = router => {
  // FACILITY
  router.post(PATHS.FACILITIES_PATH, allowAccessAdmin, facilitiesController.createFacility);
  router.get(PATHS.FACILITIES_PATH, allowAccessUser, facilitiesController.showFacilities);
  router.delete(PATHS.FACILITY_PATH, allowAccessAdmin, facilitiesController.removeFacility);

  // UNITS (INSIDE FACILITY)
  router.get(PATHS.FACILITY_UNITS_PATH, allowAccessUser, facilitiesController.getUnits);
  router.post(PATHS.FACILITY_UNITS_PATH, allowAccessAdmin, facilitiesController.createUnit);
  router.delete(PATHS.FACILITY_UNIT_PATH, allowAccessAdmin, facilitiesController.removeUnit);
  router.get(PATHS.UNIT_ALARMS_PATH, allowAccessUser, facilitiesController.showAlarms);

  // AUTH
  router.post(PATHS.LOGIN_PATH, usersController.login);
  router.get(PATHS.ACCOUNT_PATH, requireAuth, usersController.getAccount);

  // ORGANIZATIONS
  router.get(PATHS.ORGANIZATIONS_PATH, allowAccessAdmin, organizationsController.showOrganizations);
  router.post(PATHS.ORGANIZATIONS_PATH, allowAccessAdmin, organizationsController.createOrganization);
  router.delete(PATHS.ORGANIZATION_PATH, allowAccessAdmin, organizationsController.removeOrganization);

  // READINGS
  router.post(PATHS.REGISTER_READING_PATH, onlyDevice, readingsController.registerReading);

  // USER
  router.get(PATHS.USERS_PATH, allowAccessAdmin, usersController.showUsers);
  router.post(PATHS.USERS_PATH, allowAccessAdmin, usersController.register);
  router.delete(PATHS.USER_PATH, allowAccessAdmin, usersController.removeUser);

  return router;
};
