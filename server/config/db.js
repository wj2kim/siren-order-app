const mongoose = require('mongoose');

let logger;

if(process.env.NODE_ENV === 'development'){
    logger = require('../lib/logger');
}

/* 비동기 통신으로 Database 연동 */
const connectDB = async err => {
    if(err){

        return logger ? logger.error(err.message) : err.message;
    }

    const connection = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })

    logger? logger.dbStarted(connection.connection.host) : 'MongoDB connect success';
}

module.exports = connectDB;