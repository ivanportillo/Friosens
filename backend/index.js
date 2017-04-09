'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const cors = require('cors');

const routes = require('./router');
const app = express();
const Router = express.Router;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes(new Router()));

app.listen(config.app.express.port, () => {
  if (process.env.NODE_ENV !== 'test') console.log(`API listening at port ${config.app.express.port}`);
});
