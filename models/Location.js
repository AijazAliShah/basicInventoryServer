const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const LocationSchema = new Schema({
  
refId: {
  type: String
},
type: String,
address1: {
    type: String,
    // required: true
  },
address2: {
    type: String,
    // required: true
    },
city: {
    type: String,
    // required: true
},
country: {
    type: String,
    // required: true
},
zipCode: {
    type: String,
    // required: true
  }

});

module.exports = Location = mongoose.model('Location', LocationSchema);