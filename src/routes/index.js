const newsRouter = require('./news');
const siteRouter = require('./site');
const productsRouter = require('./products');
const cartRouter = require('./cart');
const userRouter = require('./user');
const paymentRouter = require('./payment');



function route(app) {
  app.use('/payment', paymentRouter);
  app.use('/user', userRouter);
  app.use('/cart', cartRouter);
  app.use('/', productsRouter);
  app.use('/news', newsRouter);
  app.use('/', siteRouter);
}

module.exports = route;
