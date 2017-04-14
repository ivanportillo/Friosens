'use strict';

module.exports = OrganizationEntity => {
  const create = (organization, cb) => {
    OrganizationEntity.create(organization, cb);
  };

  const findOneByName = (name, cb) => {
    const query = { name };
    OrganizationEntity.one(query, cb);
  };

  const findById = (organizationId, cb) => {
    const query = { id: organizationId };
    OrganizationEntity.find(query, cb);
  };

  const removeById = (organizationId, cb) => {
    const query = { id: organizationId };
    OrganizationEntity.one(query, (err, organization) => {
      if (err) cb(err);
      else {
        organization.remove(cb);
      }
    });
  };

  return { create, findOneByName, findById, removeById };
};