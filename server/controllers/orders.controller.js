const Orders = require('../models/orders.model');

// const { sendNotificationToClient } = require('../lib/notify');
// const FirebaseTokenStore = require('../models/firebase.model');

exports.selectOrdersController = (req, res) => {

        // const tokens = FirebaseTokenStore.selectAll();

        // console.log("토큰스",tokens);
        /* 구독하는 클라이언트에게 주문 알림 보냄 */
        
        // if(tokens.length !== 0){
        //     const data = {
        //         title: "test주문",
        //         body: "주문1개하나TEST완료",
        //     }
        //     sendNotificationToClient(data, tokens);
        // }

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