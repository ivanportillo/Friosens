'use strict';

module.exports = OrganizationEntity => {
  const create = (organization, cb) => {
    OrganizationEntity.create(organization, cb);
  };

  const findOneByName = (name, cb) => {
    const query = { name };
    OrganizationEntity.one(query, cb);
  };

  return { create, findOneByName };
};