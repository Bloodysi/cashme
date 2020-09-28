const express = require('express');
const session = require('express-session')
const passport = require('passport')

const recordRoutes = require('./routes/records');
const userRoutes = require('./routes/authentication');

const app = express();

//SETTIGNS
const path = require('path');
const { server } = require('./config');

//DB
require('./db');

//MIDDLEAWARES
app.use(express.json())
app.use(session({
  secret: 'this is the secret',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

//ROUTES
app.use('/api', recordRoutes)
app.use('/user', userRoutes)

//  STATIC


//SERVER ON!!

app.listen(server.port, ()=> console.log('Server on port: ', server.port))
