const express = require('express');
const router = express.Router();

const cartControllers = require('../app/controllers/CartControllers');

router.get('/', cartControllers.index);

module.exports = router;
