const express = require('express');
const compression = require('compression');

const app = express();
const {handleNotFound, handleServerError} = require('./handler');
const router = require('./routes');

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('port', process.env.PORT||3000);
app.use(handleNotFound);
app.use(handleServerError);
app.use(router);

module.exports = app;