const Product = require('../models/Product');
const { multipleMongooseToObject } = require('../../util/mongoose');


class ProductsController {
  show(req, res, next) {
    Product.findOne({slug: req.params.slug})
        .then (product => {
            res.render('products/show', { product});
        })
        .catch(next);
  }
}

module.exports = new ProductsController();
