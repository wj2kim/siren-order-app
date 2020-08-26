const mongoose = require('mongoose');

/* 비동기 통신으로 Database 연동 */
const connectDB = async() => {
    const connection = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })

    console.log(`Mongoose DB is connected to ${ connection.connection.host }`);
}

module.exports = connectDB;