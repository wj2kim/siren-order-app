const messaging = require('./firebaseInit');

module.exports = sendNotificationToClient = (tokens, data) => {
    messaging
        .sendMulticast({ tokens, data }) /* 멀티케스트 이용 */
        .then(response => {
            // 뭐가 올까
            const success = response.responses.filter(r => r.success === true ).length;
            const failures = response.responses.filter(r => r.success === false ).length;
            console.log(`구독자 알림 성공 / 실패, ${success} / ${failures} `);
        }).catch(err => {
            console.log("구독자 알림 sending 에러", err);
        })
}