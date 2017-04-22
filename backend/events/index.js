'use strict';

const glob = require('glob');
const async = require('async');

module.exports = callback => {
  let listeners = [];
  glob('listeners/*.js', { cwd: 'events/' }, (err, files) => {
    if (err) callback(err);
    else {
      async.each(files, (file, next) => {
        const listenerClass = require(`./${file}`);
        listeners.push(new listenerClass());
        next();
      }, err => {
        if(err) callback(err);
        else callback();
      });
    }
  });
};