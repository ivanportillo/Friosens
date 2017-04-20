'use strict';

const { defineSupportCode } = require('cucumber');
const async = require('async');
const should = require('should');

const repositories = require('../../../../repository');
const userRepository = repositories.User;
const organizationRepository = repositories.Organization;
const encrypt = require('../../../../infrastructure/passEncrypt');

defineSupportCode(({ Given }) => {
    Given(/^there is the following users:$/, (table, callback) => {
        const users = table.hashes();
        async.each(users, (user, done) => {
            encrypt.encrypt(user.password, (err, hash, salt) => {
              should.not.exist(err);
              user.salt = salt;
              user.password = hash;
              user.enabled = (user.enabled === 'true');
              userRepository.create(user, err => {
                should.not.exist(err);
                done();
              });
            });
        }, callback);
    });

    Given(/^the following organization:$/, (table, done) => {
      const organization = table.hashes()[0];
      organizationRepository.create(organization, (err, organizationCreated) => {
        should.not.exist(err);
        organization.should.be.eql(organizationCreated);
        done();
      });
    });
});