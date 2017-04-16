const async = require('async');
const ruleEngine = require('../utils/ruleEngine')();

const getSpecificationRules = require('./getSpecificationsRules');
const getAdditionalRules = require('./getAdditionalRules');

const SPECIFICATIONS_PATH = 'rules/refrigerantSpecifications';
const ADDITIONAL_RULES_PATH = 'rules/additionalRules';

module.exports = () => {
  const _loadSpecificationRules = (cb) => {
    getSpecificationRules(SPECIFICATIONS_PATH, (err, result) => {
      async.each(result, (rule, next) => {
        ruleEngine.addRule(rule);
        next();
      }, cb);
    });
  };

  const _loadAdditionalRules = (cb) => {
    getAdditionalRules(ADDITIONAL_RULES_PATH, (err, result) => {
      if(result.length) {
        async.each(result, (rule, next) => {
          ruleEngine.addRule(rule);
          next();
        }, cb);
      } else cb();
    });
  };
  return async.waterfall([
    next => _loadSpecificationRules(next),
    next => _loadAdditionalRules(next),
  ], () => { if(process.env.NODE_ENV !== 'test') console.log("Rules loaded"); });
};