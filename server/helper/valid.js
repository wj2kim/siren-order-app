const { check } = require('express-validator');

/* login 유효성 검사 */
exports.validLogin = [
    check('email')
    .isEmail()
    .withMessage('Must be a valid email address'),
    check('password', 'password is required').notEmpty(),
    check('password').isLength({min:6}).withMessage('password must contain at least 6 characters')
    .matches(/\d/).withMessage('password must contain a number')
]