const admin = require('firebase-admin');

// const serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS

const serviceAccount = {
                        "type": "service_account",
                        "project_id": "siren-order-4979c",
                        "private_key_id": "e89a8b75c5abc675f6365b093971f601bfba2c02",
                        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDNkmkweo4mBApy\npH5RKJZtbfDCWIy8TgDwc0+LUMsGOGmOzKw+diwRNMJ9HdDIoli/qnF5rTgZ849g\negY36zo8Xx5JJEITPTT1fNvfIyi16L7Hw5zsak7uo+Qu3SjlZEci065OiIfETPIG\n7j4Kz1wuLWo1aRjUQlizyAjncAjb3fArLwdWZ0SxtWHp+MWPqIB7r/NU/LVuDPih\nJKLiM+IxmM41IznMoHTu+TAQc8C/mxJHhkqHM+IvZ8SZd54scWHCFqsy+mCraPOm\nLaLoFvh3wFKQFyGPFlWimtAxpXrrdhxAgbCweshCph2cqogVP32LAZq8pHrtp/rX\ntbw+C+dXAgMBAAECggEAN1aUbnJvVZh834OcZWiRpf+Uchy4NfChnBjObuhe3tvM\nvp4mN+JD1pXnTRr7mybo0R+m0GRq18GS9RukFOWDlcDdPD9AckFlwjfMUHL8gIuY\n39muoo2zldYUlPEAE1A9PgjRwV5LffJgrLDxjqNnYx7immIiRvFdQ3gzvWmRWO4Y\nEBAgZGZHeZz+xcNmd+//i7GPsxbHPPliVbTisuqwV/v7MEaXy5IYznTaMOzUt9gK\nGNwZtJb6P0ekDUj7GF8FRicqIfy5XLpXD4hUv0y5iQqoGXV6g1CVI/Vy3nJiQMtP\nsAgybmK9NOj1K9mLFjsYgkA8+3v59N3GzINhh+zGkQKBgQDxTm24iaoHN8831KFC\nkqZ14KfS8pRj4dzOwdUe/Gy3QU6YPlz/w7fz59OEDJfd4k1auc3c6OVOipVryAVV\n6bXWgXZXtSnq2kksss8VfwSwonh3dcSgkMr60cG7L7gZ68SSl00MAUseZgpI/eAZ\nglzbKv3PhET+L13Ph42crG1tawKBgQDaFvDWs1XlVsarmJNDjnybfHS0jz0wB/xI\napFcBlH1wt3E1XXsObH3g+qLoVDKY7Ed9Tzf9CSg2E7FwIMFscSLupGjFMXCu3MD\nqnJev7zblfPhMhjeBnZqkRQv6YB6wMB6Ffr/5BNfkkgo8gsi+cOvvAgZpAeH4BqU\nGykcAl0cxQKBgQChSwkwFmSeWoGaEfiQZTH7DOVgrWDeurQ7R3jLM3L/sxlzzguf\nshUdZVIOq9Q/LesCv7uI8+uCakOiPZrDaGpxLSwLSD7yimHrDMI63iImZxMa1o9N\nvDrRGK/kDOuD+AH28kc/xQWPFim9zGSk6Gxk2wG4WfM77DFKbJMNrHugbQKBgQDT\nPOEttCqApppr3q7VApAjMlsAALWtbi6oHcCJt/1u475WRsOfeQqtyXJGqItOXV1S\nvRSnfxxzRtCVri+6NkM/bAhgQ2CBi3qNlGyO5XyR3B6KgzGe6/eKpNc+yRaOz2Af\nYGbrsAgry85lCnxK9kzaTHA0FbLNov1bcytQW+HAWQKBgF/V1jmGK025BNv6Rzw2\nsbBsywSx+i3CPrGMIcIiNlXo2ojQczzw0yy61OEEZckyrZZpioli4oJy7rNDB4xT\nvflf/TQTa4YyXJ9gDQV3GzfeLrWmKYoElX2LK6QS9pWW5uwn6Bi77CzK9FwatmRX\nWGEDIJbIiO2eXq+CSYAXSQb5\n-----END PRIVATE KEY-----\n",
                        "client_email": "firebase-adminsdk-7v2n4@siren-order-4979c.iam.gserviceaccount.com",
                        "client_id": "113475066132078400809",
                        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                        "token_uri": "https://oauth2.googleapis.com/token",
                        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
                        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7v2n4%40siren-order-4979c.iam.gserviceaccount.com"
                        }

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://siren-order-4979c.firebaseio.com",
});

module.exports = messaging = admin.messaging();

