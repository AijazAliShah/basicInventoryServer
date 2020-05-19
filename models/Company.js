const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CompanySchema = new Schema({
  
companyName: {
    type: String
  },
ownerName: {
    type: String,
    // required: true
  },
emailAddress: {
    type: String,
    // required: true
  },
phoneNumber: {
    type: String,
    // required: true
  },
address: {
    type: String,
    // required: true
  },
aboutCompany: {
    type: String,
    // required: true
  }
});

module.exports = Company = mongoose.model('Company', CompanySchema);