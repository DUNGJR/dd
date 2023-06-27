const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: { type: 'string' }, 
    description: { type: 'string' }, 
    image: { type: 'string' }, 
});

module.exports = mongoose.model('Product', Product);
