const express = require('express');
const path = require('path')
const compression = require('compression');
const router = require('./routes');
const app = express();


app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

module.exports = app;