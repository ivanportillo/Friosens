'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const cors = require('cors');

const routes = require('./router');
const app = express();
const Router = express.Router;

const loadRules = require('./rules');
const loadEvents = require('./events');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes(new Router()));

loadRules(err => {
  if (err) return console.error(err);
  if (process.env.NODE_ENV !== 'test') console.log("[RulesEngine] Rules loaded");
  loadEvents(err => {
    if (err) return console.error(err);
    if (process.env.NODE_ENV !== 'test') console.log("[EventsManager] Events loaded");
    app.listen(config.app.express.port, () => {
      if (process.env.NODE_ENV !== 'test') console.log(`[Server] API listening at port ${config.app.express.port}`);
    });
  });
});
