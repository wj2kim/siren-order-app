const Orders = () => {
    let orderList = [
        { orderId: '0112', timeInMs: 1601885792763, userKey:'3jfief8443', drinkName: '아이스 그린티 라떼', cupCount: '1' },
        { orderId: '0113', timeInMs: 1601885824000, userKey:'kfjuhg8t74', drinkName: '아메리카노', cupCount: '2' },
        { orderId: '0114', timeInMs: 1601889824000, userKey:'dj8e8d74h8', drinkName: '아이스 아메리카노', cupCount: '1' },
    ]
    return {
        insertOne(orderForm) {
            orderList.push(orderForm);
            return [...orderList];
        },
        selectAll() {
            return [...orderList];
        },
        removeOne(ids) {
            for(id of ids){
                const idx = orderList.findIndex((order) => order.orderId === id)
                if(idx > -1 ) orderList.splice( idx, 1);
            }
            return [...orderList];
        }
    }
}

module.exports = Orders();