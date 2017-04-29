'use strict';

const should = require('should');
const { defineSupportCode } = require('cucumber');
const async = require('async');

const repositories = require('../../../../repository');
const organizationRepository = repositories.Organization;

defineSupportCode(({ Given }) => {
  Given(/^the following organizations:$/, (table, done) => {
    const organizations = table.hashes();
    async.each(organizations, (organization, next) => {
      organizationRepository.create(organization, next);
    }, done);
  });
});
