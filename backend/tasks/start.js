'use strict';

const database = require('../utils/database');

const models = require('../models');

const db = database.getDb();

db.drop(err => {
  if(err) return console.log(err);
  db.sync(err => {
    if (err) console.log(err);
    else console.log("Done!");
    db.close();
  });
});