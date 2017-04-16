'use strict';

const glob = require('glob');
const async = require('async');

module.exports = () => {
  let listeners = [];
  glob('listeners/*.js', { cwd: 'events/' }, (err, files) => {
    if (err) console.log(err);
    else {
      async.each(files, (file, next) => {
        const listenerClass = require(`./${file}`);
        listeners.push(new listenerClass());
        next();
      }, () => { if(process.env.NODE_ENV !== 'test') console.log("Event Listeners loaded"); });
    }
  });
};