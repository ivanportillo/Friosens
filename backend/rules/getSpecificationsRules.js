'use strict';
const glob = require('glob');
const fs = require('fs');
const async = require('async');
const config = require('config');

const specificationPrototype = require('./specificationPrototype.json');

module.exports = (specificationsPath, callback) => {
  const _readSpecifications = (specificationsPath, cb) => {
    glob(`${specificationsPath}/*.json`, (err, files) => {
      async.map(files, (file, next) => {
        fs.readFile(file, 'utf8', (err, data) => {
          if (err) next(err);
          else next(null, JSON.parse(data));
        });
      }, cb);
    });
  };

  const _generateRules = (specifications, cb) => {
    const rules = [];
    async.each(specificationPrototype.parameters, (parameter, next) => {
      const lowerRule = { conditions: { any: [] }, event: { type: `low_${parameter}` }};
      const upperRule = { conditions: { any: [] }, event: { type: `high_${parameter}` }};
      let lowerConditions = [];
      let upperConditions = [];
      async.each(specifications, (specification, next) => {
        const condition = {
          all: [{
            fact: 'refrigerant',
            operator: 'equal',
            value: specification.refrigerant
          }, {
            fact: parameter,
            operator: 'lessThan',
            value: specification.parameters[parameter].lowerLimit
          }]
        };
        lowerConditions.push(condition);
        next();
      }, () => {
        async.each(specifications, (specification, next) => {
          const condition = {
            all: [{
              fact: 'refrigerant',
              operator: 'equal',
              value: specification.refrigerant
            }, {
              fact: parameter,
              operator: 'greaterThan',
              value: specification.parameters[parameter].upperLimit
            }]
          };
          upperConditions.push(condition);
          next();
        }, () => {
          lowerRule.conditions.any = lowerConditions;
          upperRule.conditions.any = upperConditions;
          rules.push(lowerRule);
          rules.push(upperRule);
        });
      });
      next();
    }, () => cb(null, rules));
  };

  return async.waterfall([
    next => _readSpecifications(specificationsPath, next),
    (specifications, next) => _generateRules(specifications, next)
  ], callback);
};
