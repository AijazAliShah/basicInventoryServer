const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const StoreSchema = new Schema({
  
storeName: {
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
companyName: {
    type: String,
    // required: true
},
companyId: {
  type: String
},
phoneNumber: {
    type: String,
    // required: true
  },
storeAddress: {
    type: String,
    // required: true
  },
city: {
    type: String,
    // required: true
  },
county: {
    type: String,
    // required: true
  },
zipCode: {
    type: String,
    // required: true
  },
userName: {
    type: String,
    // required: true
  },
password: {
    type: String,
    // required: true
  },
aboutStore: {
    type: String,
    // required: true
  },
  tax: {
    type: String,
  },
  isActive: {
      type: Boolean,
  },
  storeTimings: [
    {
      day: String,
      openTime: String,
      ClosingTime: String,
      isClosed: Boolean
    }
  ],
  c_info_: [{
      c_uName_: String,
      c_passWd_: String,
  }],
  lat: String,
  lng: String,
  messageFromStore: {
    type: String
  },
  orderCancellationPolicy: {
    type: String
  },
  termsAndCondition: {
    type: String
  }

});

module.exports = Store = mongoose.model('Store', StoreSchema);