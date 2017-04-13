'use strict';

module.exports = OrganizationEntity => {
  const create = (organization, cb) => {
    OrganizationEntity.create(organization, cb);
  };

  return { create };
};