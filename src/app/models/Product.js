const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const Product = new Schema({
    name: { type: 'string', required: true}, 
    description: { type: 'string' }, 
    price: { type: 'string' }, 
    image: { type: 'string' }, 
    slug: { type: 'string', slug: 'name', unique: true }, 
    

}, { timestamps: true});

module.exports = mongoose.model('Product', Product);
