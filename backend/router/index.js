'use strict';

const PATHS = require('./paths');
const facilitiesController = require('./controllers/facilities');
const usersController = require('./controllers/users');

module.exports = router => {
  // FACILITY
  router.post(PATHS.FACILITIES_PATH, facilitiesController.createFacility);
  router.delete(PATHS.FACILITY_PATH, facilitiesController.removeFacility);
  router.put(PATHS.FACILITY_PATH, facilitiesController.updateFacility);

  // AUTH
  router.post(PATHS.LOGIN_PATH, usersController.login);

  return router;
};
