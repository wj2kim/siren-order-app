const Orders = require('../models/orders.model');

const orders = Orders();

exports.selectOrdersController = (req, res) => {
    return res.status(200).json({
        orders : orders.selectAll(),
    })
}

exports.removeOrderController = (req, res) => {
    const { id } = req.body;
    orders.removeOne(id);
    return res.status(200).json({
        orders : orders.selectAll(),
    })
}