const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    // required: true
  },
  mobile: {
    type: String,
    // required: true
  },
  zipCode: {
    type: String,
    // required: true
  },
  password: {
    type: String,
    // required: true
  },
  isGuest: Boolean,
  guestId: String,
  type: String
});

module.exports = User = mongoose.model('User', UserSchema);