const express = require('express');
const router = express.Router();

/* order 관련 controller 가져오기 */
const {
    selectOrdersController,
    removeOrderController,
    selectAnnouncementController,
    replaceAnnouncementController,
} = require('../controllers/orders.controller.js');


router.post('/selectOrders', selectOrdersController);
router.post('/removeOrder', removeOrderController);
router.post('/selectAnnouncement', selectAnnouncementController);
router.post('/replaceAnnouncement', replaceAnnouncementController);

module.exports = router;