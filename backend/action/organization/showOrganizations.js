'use strict';

module.exports = organizationRepository => {
  const _getOrganizations = cb => {
    organizationRepository.getAll(cb);
  };

  return (callback) => _getOrganizations(callback);
};
