'use strict';

const PATHS = require('./paths');
const facilitiesController = require('./controllers/facilities');

module.exports = router => {
  router.post(PATHS.FACILITIES_PATH, facilitiesController.createFacility);
  router.delete(PATHS.FACILITY_PATH, facilitiesController.removeFacility);
  router.put(PATHS.FACILITY_PATH, facilitiesController.updateFacility);

  return router;
};
