import firebase from 'firebase/app';
import 'firebase/messaging';
  
const firebaseConfig = {
    apiKey: "AIzaSyCNWa0vmmdN4L5DqKhJ-onq6uaLgBS2msU",
    authDomain: "siren-order-4979c.firebaseapp.com",
    databaseURL: "https://siren-order-4979c.firebaseio.com",
    projectId: "siren-order-4979c",
    storageBucket: "siren-order-4979c.appspot.com",
    messagingSenderId: "960085631910",
    appId: "1:960085631910:web:fa08ee92d81731b7406567",
    // measurementId: "G-TY8MS4TLFF"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

/* 앱에서 웹 사용자인증 정보  */
// messaging.usePublicVapidKey('BI-5g_wp0KVuVVS-EZN_FWWtyk-fBIsIL__2CteKwi7uvSynMESNTTsN6gSQu9FiTES64V2vJCF4_3glUlEL59M');

// export const requestFirebaseNotificationPermission = () => 
//     console.log("메시지지이이", messaging.requestPermission());
//     new Promise((resolve, reject) => {
//         messaging.requestPermission()
//         .then(() => {console.log("메시징겟토큰", messaging.getToken()); return messaging.getToken()})
//         .then((firebaseToken) => {
//             console.log("파베토큰",firebaseToken)
//             resolve(firebaseToken);
//         })
//         .catch((err) => {
//             reject(err);
//         })
//     });

// export const onMessageListener = () =>
//     new Promise((resolve) => {
//         messaging.onMessage((payload) => {
//             console.log("받은 메시지 제목",payload.notification.title)
//             console.log("받은 메시지 바디",payload.notification.body)
//             resolve(payload);
//         });
//     });

export const requestFirebaseNotificationPermission = () =>
    // console.log("알림권한 상태", Notification.permission)
  new Promise((resolve, reject) => {
    Notification
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
