const path = require('path');

const express = require('express');

const app = express();

const {handleNotFound, handleServerError} = require('./handler');
const router = require('./router');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' })
  );

app.set('port', process.env.PORT||3000);
app.use(router);
app.use(handleNotFound);
app.use(handleServerError);

module.exports = app;