const Product = require('../models/Product');
const { multipleMongooseToObject } = require('../../util/mongoose');


class UserControllers {
  index(req, res, next) {
   res.render('user')
  } 
}

module.exports = new UserControllers();
   