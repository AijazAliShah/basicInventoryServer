const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProductSchema = new Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: String
    },
    quantity: {
        type: String
    },
    serialNo: {
        type: String
    },
    
});

module.exports = Product = mongoose.model('Product', ProductSchema);