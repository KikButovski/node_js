const express = require('express');
const bodyParser = require('body-parser');

const {developersRouter} = require('./routes/developer.routes');
const {managersRouter} = require('./routes/manager.routes');
const {initDBConnection} = require('./db/connectDB');

const app = express();
initDBConnection();

app.use(bodyParser.json());
app.use('/developers', developersRouter.getRoutes());
app.use('/managers', managersRouter.getRoutes());
app.use('/', express.static(__dirname)); 

app.listen(8080, () => console.log('we are on 8080'));