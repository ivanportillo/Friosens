'use strict';

const descriptions = require('./descriptions.json');

module.exports = title => {
  if(descriptions[title]) return descriptions[title];
  return null;
};
