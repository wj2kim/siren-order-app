const admin = require('firebase-admin');
const serviceAccount = require('../config/serviceAccount.json');

// const serviceAccount = process.exnv.GOOGLE_APPLICATION_CREDENTIALS

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://siren-order-4979c.firebaseio.com",
});

module.exports = messaging = admin.messaging();

