const express = require('express');
const router = express.Router();

/* validation 가져오기 */
const { validLogin } = require('../lib/valid');

/* auth 관련 controller 가져오기 */
const {
    registerController,
    loginController,
    registerClientTokenController,
} = require('../controllers/auth.controller.js');

router.post('/register', registerController);
router.post('/login', validLogin, loginController);
router.post('/registerClientToken', registerClientTokenController);


module.exports = router;