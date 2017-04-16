'use strict';

const models = require('../models');

const UserEntity = models.User;
const UnitEntity = models.Unit;
const ReadingEntity = models.Reading;
const FacilityEntity = models.Facility;
const OrganizationEntity = models.Organization;
const AlarmEntity = models.Alarm;

const createUserRepository = require('./userRepository');
const createFacilityRepository = require('./facilityRepository');
const createReadingRepository = require('./readingRepository');
const createUnitRepository = require('./unitRepository');
const createOrganizationRepository = require('./organizationRepository');
const createAlarmRepository = require('./alarmRepository');

module.exports = {
  User: createUserRepository(UserEntity),
  Unit: createUnitRepository(UnitEntity),
  Reading: createReadingRepository(ReadingEntity),
  Facility: createFacilityRepository(FacilityEntity),
  Organization: createOrganizationRepository(OrganizationEntity),
  Alarm: createAlarmRepository(AlarmEntity)
};
