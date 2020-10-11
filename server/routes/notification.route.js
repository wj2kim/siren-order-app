const express = require('express');
const router = express.Router();
const webpush = require('web-push');


const publicVapidKey = "BJXf8i7ENKOYO8WbH82YD3Le_s3ps-BI2FkRdX9T5AAEKIUwtKwHearkxB8b9GPhm5B9dzykOjt3AalKPlPugt8";
const privateVapidKey = "Ck10BRUEyBk970BHrVJkekoR6u8_Vnag_w4G5zIsAAA";

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);

router.post('/subscribe', (req, res) => {

    /* 클라이언트로 부터 푸시 알람 객체 가지고 옴 */
    const subscription = req.body;

    res.status(201).json({});

    const payload = JSON.stringify({
        title: 'Push Test'
    });

    webpush.sendNotification(subscription, payload).catch(err => console.error(err));
});


