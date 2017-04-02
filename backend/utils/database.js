const orm = require('orm');
const config = require('config');
const dbCfg = config.get('app.database');

let db;

module.exports = {
  getDb: () => {
    if(db) return db;
    db = orm.connect(`mysql://${dbCfg.user}:${dbCfg.password}@${dbCfg.host}/${dbCfg.database}`);

    return db;
  }
};
