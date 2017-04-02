const { defineSupportCode } = require('cucumber');
const database = require('../../../utils/database');

defineSupportCode(({ Before }) => {
  const db = database.getDb();
  Before((scenarioResult, cb) => {
    db.drop(err => {
      db.sync(err => {
        cb();
      });
    });
  })
});
