/**
 * 주문 ID 생성 함수 ( 매일 11시 59분에 1번으로 초기화 됨)
 */
const OrderIdGenerator = () => {
    let orderId = 4;
    return {
        resetOrderId() {
            orderId = 4;
            return;
        },
        getOrderId() {
            const reformedOrderId = orderId.toString().padStart(4, '0');
            orderId ++;
            return reformedOrderId;
        }
    }
}

module.exports = OrderIdGenerator();