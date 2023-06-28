const Product = require('../models/Product');
const { mongooseToObject } = require('../../util/mongoose');


class ProductsController {
  show(req, res, next) {
    Product.findOne({slug: req.params.slug})
        .then (products => {
            res.render('products/show', { 
              products: mongooseToObject(products) 
            });
        })
        .catch(next);
  }

  create(req, res, next) {
    res.render('products/create');
  }

  store(req, res, next) {
    const product = new Product(req.body);
    product.save()
      .then(() => res.redirect('/'))
      .catch(next);

  }
}

module.exports = new ProductsController();
