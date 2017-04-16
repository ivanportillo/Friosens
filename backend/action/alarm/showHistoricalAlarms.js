'use strict';

module.exports = alarmRepository => {
  const _getHistorical = (unitId, limit, cb) => {
    alarmRepository.findByUnitId(unitId, limit, cb);
  };

  return (unitId, limit, callback) => _getHistorical(unitId, limit, callback);
};
