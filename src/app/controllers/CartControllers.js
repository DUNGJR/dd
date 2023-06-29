const Product = require('../models/Product');
const { multipleMongooseToObject } = require('../../util/mongoose');


class CartControllers {
  index(req, res, next) {
   res.render('cart')
  } 
}

module.exports = new CartControllers();
   