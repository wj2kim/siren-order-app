const FirebaseTokenStore = require('../models/firebase.model');
const { registerTopicSubscription, unsubscribeTopic } = require('../lib/notify');

exports.firebaseTokenHandler = ( firebaseToken ) => {
    if(!FirebaseTokenStore.isExist(firebaseToken)){
        const tokens = FirebaseTokenStore.insertOne(firebaseToken) && FirebaseTokenStore.selectAll();

        // console.log("토큰스", tokens);
        // registerTopicSubscription(tokens, 'receiveOrders');
        return true;
    }else{
        return false;
    }
}


