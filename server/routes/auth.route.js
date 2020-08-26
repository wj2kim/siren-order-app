const express = require('express');
const router = express.Router();

/* validation 가져오기 */
const { validLogin } = require('../lib/valid');

/* controller 가져오기 */
const {
    registerController,
    loginController
} = require('../controllers/auth.controller.js');

router.post('/register', registerController)
router.post('/login', validLogin, loginController);

module.exports = router;