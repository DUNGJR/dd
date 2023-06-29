const Product = require('../models/Product');
const { multipleMongooseToObject } = require('../../util/mongoose');


class PaymentControllers {
  index(req, res, next) {
   res.render('payment');
  } 
}

module.exports = new PaymentControllers();
   