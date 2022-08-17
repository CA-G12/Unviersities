const app = require('./app');
app.listen(app.get('port'),()=>{
    console.log(`server listen in 3000` );
});
