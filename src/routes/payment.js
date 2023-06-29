const express = require('express');
const router = express.Router();

const PaymentControllers = require('../app/controllers/PaymentControllers');

// router.get('/:slug', newsController.show);
router.get('/', PaymentControllers.index);

module.exports = router;
