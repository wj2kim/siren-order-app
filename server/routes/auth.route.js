const express = require('express');
const router = express.Router();

//Validation
const { validLogin} = require('../helper/valid');

// Load Controllers
const {
    registerController
} = require('../controllers/auth.controller.js');

router.post('/register', registerController)

module.exports = router;