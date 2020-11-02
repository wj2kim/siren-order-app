const Orders = require('../models/orders.model');
const Announcement = require('../models/announcement.model');

exports.selectOrdersController = (req, res) => {

    return res.status(200).json({
        orders : Orders.selectAll(),
    })
}

exports.removeOrderController = (req, res) => {
    const { ids } = req.body;
    return res.status(200).json({
        orders : Orders.removeOne(ids),
    })
}

exports.selectAnnouncementController = (req, res) => {

    return res.status(200).json({
        announcement: Announcement.selectAnnouncement(),
    })
}

exports.replaceAnnouncementController = (req, res) => {
    
    const { announcement } = req.body;
    if(typeof announcement !== 'string'){
        return res.status(400).json({
            message: '문자열이 아닙니다.'
        })
    }else{
        return res.status(200).json({
            announcement: Announcement.replaceAnnouncement(announcement),
        })
    }
}