<<<<<<< HEAD
const express = require('express');
const compression = require('compression');
=======
const path = require('path')

const express = require('express');

const app = express();
>>>>>>> 1b23cb5846ff1105027431057bb86d3c6720ef44

const app = express();
const {handleNotFound, handleServerError} = require('./handler');
const router = require('./routes');



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

<<<<<<< HEAD
app.set('port', process.env.PORT||3000);
app.use(handleNotFound);
app.use(handleServerError);
app.use(router);
=======
app.use(
    express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' })
  );

app.set('port' , process.env.PORT || 3000);
>>>>>>> 1b23cb5846ff1105027431057bb86d3c6720ef44

module.exports = app;