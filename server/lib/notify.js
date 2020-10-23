const messaging = require('./firebaseInit');

const sendNotificationToClient = (data, tokens) => {
    const topic = 'receiveOrders'

    messaging
    .send({ data, topic}) /* 멀티케스트 이용 */
    .then(response => {
        // const successes = response.responses.filter(r => r.success === true ).length;
        // const failures = response.responses.filter(r => r.success === false ).length;
        console.log("토픽 리스판스", response);
        // console.log(`구독자 알림 성공 / 실패, ${successes} / ${failures} `);
    }).catch(err => {
        console.log("구독자 알림 sending 에러", err);
    })
};

const registerTopicSubscription = (tokens, topic) => {
    messaging
    .subscribeToTopic(tokens, topic)
    .then(response => console.log("토픽 구독 성공", response))
    .catch(err => console.log("토픽 구독 실패", err));
}

const unsubscribeTopic = (tokens, topic) => {
    messaging
    .unsubscribeFromTopic(tokens, topic)
    .then(response => console.log("토큰 구독 취소 성공", response))
    .catch(err => console.log("토큰 구독 취소 실패", err));
}

module.exports = {
    sendNotificationToClient,
    registerTopicSubscription,
    unsubscribeTopic
}