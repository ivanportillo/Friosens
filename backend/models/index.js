const orm = require('orm');
const config = require('config');

const databaseCfg = config.get('app.database');

let connection = null;

const setup = (db, cb) => {
  require('./user')(orm, db);
  require('./facility')(orm, db);
  require('./unit')(orm, db);
  require('./reading')(orm,db);

  return cb(null, db);
};

module.exports = (cb) => {
  if(connection) return cb(null, connection);

  orm.connect(databaseCfg, (err, db) => {
    if(err) return cb(err);

    connection = db;
    db.settings.set('instance.returnAllErrors', true);
    setup(db, cb);
  });
};
