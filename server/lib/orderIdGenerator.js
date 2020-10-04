const OrderIdGenerator = () => {
    let orderId = 1;
    return {
        resetOrderId() {
            return orderId = 1;
        },
        getOrderId() {
            const reformedOrderId = orderId.toString().padStart(4, '0');
            orderId ++;
            return reformedOrderId;
        }
    }
}

module.exports = OrderIdGenerator();