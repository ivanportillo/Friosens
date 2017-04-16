'use strict';
const glob = require('glob');
const fs = require('fs');
const async = require('async');

module.exports = (additionalRulesPath, callback) => {
  const _readAdditionalRules = (additionalRulesPath, cb) => {
    glob(`${additionalRulesPath}/*.json`, (err, files) => {
      async.map(files, (file, next) => {
        fs.readFile(file, 'utf8', (err, data) => {
          if (err) next(err);
          else next(null, JSON.parse(data));
        });
      }, cb);
    });
  };

  return _readAdditionalRules(additionalRulesPath, callback);
};