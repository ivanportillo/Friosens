const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');

const models = require('./models');

const app = express();
const expressCfg = config.get('app.express');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
      models(function (err, db) {
        if (err) return next(err);

        req.models = db.models;
        req.db     = db;

        return next();
      });
});

app.listen(expressCfg.port, () => {
    console.log(`Server listening at port ${expressCfg.port}`);
});
