const schedule = require('node-schedule');
const orderIdGenerator = require('./orderIdGenerator');

/* 매일 23시 59분에 주문번호 1로 리셋시키는 스케줄러*/
const executeScheduler = schedule.scheduleJob('0 59 23 * * *', function(){
    orderIdGenerator.resetOrderId();
});

module.exports = {
    executeScheduler,
    orderIdGenerator,   
}