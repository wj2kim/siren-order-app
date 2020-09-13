const Orders = () => {
    let orderList = [
        { id: 29, content: '아메리카노 1잔', date: new Date() - 20000 },
        { id: 30, content: '카페라테 2잔, 아이스초코 1잔', date: new Date() },
        { id: 31, content: '카페모카 1잔, 아메리카노 2잔', date: new Date() },
    ]
    return {
        selectAll() {
            return orderList
        },
        removeOne(id) {
            const idx = orderList.findIndex((order) => order.id === id)
            if(idx > -1 ) return orderList.splice( idx, 1);
            // return orderList.filter(order => order.id !== id);
        }
    }
}

module.exports = Orders;