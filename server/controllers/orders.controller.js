const Orders = require('../models/orders.model');

exports.selectOrdersController = (req, res) => {
    return res.status(200).json({
        orders : Orders.selectAll(),
    })
}

exports.removeOrderController = (req, res) => {
    const { id } = req.body;
    return res.status(200).json({
        orders : Orders.removeOne(id),
    })
}