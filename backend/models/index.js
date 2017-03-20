'use strict';

const orm = require('orm');
const createFacilityEntity = require('./facilityEntity');
const createReadingEntity = require('./readingEntity');
const createUnitEntity = require('./unitEntity');
const createUserEntity = require('./userEntity');

const db = orm.connect('mysql://root:mysql@localhost/friosens');

createFacilityEntity(orm, db);
createReadingEntity(orm, db);
createUnitEntity(orm, db);
createUserEntity(orm, db);

module.exports = {
  Facilty: db.models.facility,
  Reading: db.models.reading,
  Unit: db.models.unit,
  User: db.models.user
};
