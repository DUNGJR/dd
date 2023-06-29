const express = require('express');
const router = express.Router();

const userControllers = require('../app/controllers/UserControllers');

router.get('/', userControllers.index);

module.exports = router;
