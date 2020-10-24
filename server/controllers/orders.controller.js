const Orders = require('../models/orders.model');

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