'use strict';

const models = require('../models');

const UserEntity = models.User;
const UnitEntity = models.Unit;
const ReadingEntity = models.Reading;
const FacilityEntity = models.Facility;

const createUserRepository = require('./userRepository');

module.exports = {
  User: createUserRepository(UserEntity)
};
