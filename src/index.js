<<<<<<< HEAD
const app = require('./app');
app.listen(app.get('port'),()=>{
    console.log(`server listen in 3000` );
});
=======

const app = require('./app');

const port= app.get('port')



app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
  });
>>>>>>> 1b23cb5846ff1105027431057bb86d3c6720ef44
