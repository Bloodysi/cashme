const { Schema, model } = require('mongoose');


const recordSchema = new Schema({
  category: {type: String, required: true},
  money: {type: Number, required: true},
  type: {type: String, required: true},
  time: {type: Date, required: true, default: new Date()},
})

module.exports = model('records', recordSchema);
