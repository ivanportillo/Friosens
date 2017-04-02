'use strict';

const models = require('../models');

const UserEntity = models.User;
const UnitEntity = models.Unit;
const ReadingEntity = models.Reading;
const FacilityEntity = models.Facility;

const createUserRepository = require('./userRepository');
const createFacilityRepository = require('./facilityRepository');
const createReadingRepository = require('./readingRepository');
const createUnitRepository = require('./unitRepository');

module.exports = {
  User: createUserRepository(UserEntity),
  Unit: createUnitRepository(UnitEntity),
  Reading: createReadingRepository(ReadingEntity),
  Facility: createFacilityRepository(FacilityEntity)
};
