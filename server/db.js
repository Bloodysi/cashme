const mongoose = require('mongoose');
const { db } = require('./config');


mongoose.connect(db.db_port, { useNewUrlParser: true, useUnifiedTopology: true }, (error => {
  if(error) return console.error(error.message)
  console.log('DB IS CONNECTED');
}))


module.exports = mongoose;