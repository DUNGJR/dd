const mongoose = require('mongoose');

function connect() {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/LDSHOP')
        .then(() => console.log('Connected!'));
    } catch (error) {
        console.log('Error connecting');
    }
}

module.exports = { connect };