const express = require('express');
const router = express.Router();

/* order 관련 controller 가져오기 */
const {
    selectOrdersController,
    removeOrderController,
} = require('../controllers/orders.controller.js');


router.post('/selectOrders', selectOrdersController);
router.post('/removeOrder', removeOrderController);

module.exports = router;