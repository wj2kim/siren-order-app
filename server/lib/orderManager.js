const Orders = require('../models/orders.model');
const { orderIdGenerator } = require('../lib/orderIdScheduler');
const sendNotificationToClient = require('../lib/notify');


/**
 * 주문 정보 생성자
 * @param {number} orderId 
 * @param {number} timeInMs 
 * @param {string} userKey 
 * @param {string} drinkName 
 * @param {numbrer} cupCount 
 */

function OrderForm(orderId, timeInMs, plusfriendUserKey, drinkName, cupCount){
    this.orderId = orderId,
    this.timeInMs = timeInMs,
    this.plusfriendUserKey = plusfriendUserKey,
    this.drinkName = drinkName,
    this.cupCount = cupCount
}

/**
 * 주문 정보 생성 및 관리
 * @class OrderManager
 * @param {object} body 
 */

const manageOrder = ( body ) => {
    if(body){
        const { drinkName, cupCount } = body.action.params;
        const { plusfriendUserKey } = body.userRequest.user.properties;
        
        const orderId = orderIdGenerator.getOrderId();
        const timeInMs = Date.now();

        const orderForm = new OrderForm(
            orderId,
            timeInMs,
            plusfriendUserKey,
            drinkName,
            cupCount,
        )

        const copiedOrderList = Orders.insertOne(orderForm);

        const tokens = [];
        const notificationData = {
            title: '주문',
            body: 'testing',
        }

        /* 구독하는 클라이언트에게 주문 알림 보냄 */
        sendNotificationToClient(tokens, notificationData);
        
        console.log("오더 추가 하고 난 뒤 오더 목록", copiedOrderList);
        console.log("오더 정보", orderForm);

        return orderForm;
    }

    return null;
}




module.exports = manageOrder;