const express = require('express');
const app = express();

const recordRoutes = require('./routes/records');

//SETTIGNS
const { server } = require('./config');
const path = require('path');

//DB
require('./db');

//MIDDLEAWARES
app.use(express.json())


//ROUTES
app.use('/api', recordRoutes)

//  STATIC


//SERVER ON!!

app.listen(server.port, ()=> console.log('Server on port: ', server.port))
