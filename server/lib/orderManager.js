const Orders = require('../models/orders.model');
const { orderIdGenerator } = require('../lib/orderIdScheduler');


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
        // copiedOrderList 를 클라이언트에게 먼저 알려주는 로직을 만들어야 함
        console.log("오더 추가 하고 난 뒤 오더 목록", copiedOrderList);
        console.log("오더 정보", orderForm);

        return orderForm;
    }

    return null;
}


module.exports = manageOrder;