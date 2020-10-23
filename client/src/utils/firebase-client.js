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
    measurementId: "G-TY8MS4TLFF"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// messaging.usePublicVapidKey("BI-5g_wp0KVuVVS-EZN_FWWtyk-fBIsIL__2CteKwi7uvSynMESNTTsN6gSQu9FiTES64V2vJCF4_3glUlEL59M");

export const requestFirebaseNotificationPermission = () =>
new Promise((resolve, reject) => {
    Notification
      .requestPermission()
      .then(() => messaging.getToken())
      .then(firebaseToken => resolve(firebaseToken))
      .catch(reject);
  });

export const onMessageListener = () =>
  new Promise((resolve, reject) => {
    messaging.onMessage((payload) => {
      console.log("받은 메시지", payload);
      resolve(payload);
    });
    // reject(new Error('푸시 알림 실패'));
  });
