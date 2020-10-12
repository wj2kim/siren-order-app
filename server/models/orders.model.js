const Orders = () => {
    let orderList = [
        { orderId: '112', timeInMs: 1601885792763, plusfriendUserKey:'123def34', drinkName: '아이스 그린티 라떼', cupCount: '1' },
        { orderId: '113', timeInMs: 1601885824000, plusfriendUserKey:'123def34', drinkName: '아메리카노', cupCount: '2' },
    ]
    return {
        insertOne(orderForm) {
            orderList.push(orderForm);
            return [...orderList];
        },
        selectAll() {
            return [...orderList];
        },
        removeOne(id) {
            const idx = orderList.findIndex((order) => order.orderId === id)
            if(idx > -1 ) orderList.splice( idx, 1);
            return [...orderList];
            // return orderList.filter(order => order.id !== id);
        }
    }
}

module.exports = Orders();