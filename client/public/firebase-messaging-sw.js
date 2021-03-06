importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyCNWa0vmmdN4L5DqKhJ-onq6uaLgBS2msU",
    authDomain: "siren-order-4979c.firebaseapp.com",
    databaseURL: "https://siren-order-4979c.firebaseio.com",
    projectId: "siren-order-4979c",
    storageBucket: "siren-order-4979c.appspot.com",
    messagingSenderId: "960085631910",
    appId: "1:960085631910:web:fa08ee92d81731b7406567",
}

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log("백그라운드 메시지", payload);
	const title  =  payload.notification.title;
	const options  = {
        body: payload.notification.body,
    }; 
	return self.registration.showNotification(title, options);
})

self.addEventListener('notificationclick', event => {
    event.notification.close();
    console.log("노티피케이션 클릭", event);
    // if (event.action === 'get') {
    //     synchronizeReader();
    // } else {
    // clients.openWindow('https://www.youtube.com');
    // }
    // window.open('www.youtube.com');
    return event;
}, false)

