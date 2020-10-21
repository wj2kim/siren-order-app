const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/* body-parser 사용 */
app.use(bodyParser.json());

/* 절대경로를 통해 config.env 파일 불러옴 */
require('dotenv').config({
    path: './server/config/config.env' 
})

/* Database 연동 */
const connectDB = require('./config/db');
connectDB();


if(process.env.NODE_ENV === 'development'){
    /* 개발 모드 시, 프론트엔드 포트 3000번과의 통신을 위해 cors 사용 */
    const cors = require('cors');
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))
    /* 개발 모드 시, api 통신 로깅에 사용 할 모건 연동 */
    const morgan = require('morgan');
    app.use(morgan('dev'))
}

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

/* 회원 관리 관련 라우터*/
const authRouter = require('./routes/auth.route')
app.use('/api/', authRouter);

/* 주문 관리 관련 라우터 */
const ordersRouter = require('./routes/orders.route')
app.use('/api/', ordersRouter);

/* 카카오 오픈빌더 스킬 관련 라우터  */
const skillRouter = require('./routes/skills.route')
app.use('/api/skill/', skillRouter);

/* 푸시 알람 관련 라우터*/
// const notificationRouter = require('./routes/notification.route')
// app.use('/notification/', notificationRouter);

// app.use((req, res, next) => {
//     /* 404 Not Found - 서버가 요청받은 리소스를 찾을 수 없음. */
//     res.status(404).json({
//         success: false, 
//         message: "Page Not Found"
//     })
// });

let protected = [];

/* 클라이언트로 부터 받은 요청 페이지를 무조건 index.html로 반환해주는 설정 */
app.get("*", (req, res) => {
    let path = req.params['0'].substring(1)
  
    if (protected.includes(path)) {
      res.sendFile(`${__dirname}/build/${path}`);
    } else {
      res.sendFile(`${__dirname}/build/index.html`);
    }
});

/* 주문번호 관리 스케쥴러 */
const { executeScheduler } = require('./lib/orderIdScheduler');

var argv = require('minimist')(process.argv.slice(2));

/* 의도한 호스트 / 기본 호스트 */
const customHost = argv.host || process.env.HOST;
/* 기본 IPv4/6 host */
const HOST = customHost || null; 
const prettyHost = customHost || 'localhost';

const PORT = process.env.PORT;

app.listen(PORT, HOST, async err => {
    if(process.env.NODE_ENV === 'development'){
        const logger = require('./lib/logger');
        if(err) {
            return logger.error(err.message);
        }
    
        logger.appStarted(PORT, prettyHost);
    }
});

