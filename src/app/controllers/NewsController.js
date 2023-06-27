const Product = require('../models/Product');
const { multipleMongooseToObject } = require('../../util/mongoose');


class NewsController {
  index(req, res) {
    res.render('news');
    // Product.find()
    //     .then(products => res.json(products))
    //     .catch(err => res.status(500).json(err));
  }
}

module.exports = new NewsController();
