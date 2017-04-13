'use strict';

const orm = require('orm');
const config = require('config');
const database = require('../utils/database');

const createAlarmEntity = require('./alarmEntity');
const createFacilityEntity = require('./facilityEntity');
const createReadingEntity = require('./readingEntity');
const createUserEntity = require('./userEntity');
const createUnitEntity = require('./unitEntity');
const createOrganizationEntity = require('./organizationEntity');

const db = database.getDb();

createAlarmEntity(orm, db);
createFacilityEntity(orm, db);
createReadingEntity(orm, db);
createUserEntity(orm, db);
createUnitEntity(orm, db);
createOrganizationEntity(orm, db);

module.exports = {
  Alarm: db.models.alarm,
  Facility: db.models.facility,
  Reading: db.models.reading,
  User: db.models.user,
  Unit: db.models.unit,
  Organization: db.models.organization
};
