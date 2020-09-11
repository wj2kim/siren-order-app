const mongoose = require('mongoose');
const logger = require('../lib/logger');

/* 비동기 통신으로 Database 연동 */
const connectDB = async err => {
    if(err){
        return logger.error(err.message);
    }

    const connection = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })

    logger.dbStarted(connection.connection.host);
}

module.exports = connectDB;