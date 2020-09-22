const express = require('express');
const router = express.Router();

/* 카카오 오픈빌더 스킬 관련 controller 가져오기 */
// const {
//     selectOrdersController,
//     removeOrderController,
// } = require('../controllers/orders.controller.js');


router.post('/sayHello', function(req, res) {
    console.log("res", res);
    const response = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: "반갑습니다. 몽촌토성카페입니다."
                    }
                }
            ]
        }
    }
    res.status(200).send(response);
});



router.post('/order', function(req, res) {
    console.log("body.params", req.body)
    const { drinkName, cupCount } = req.body.action.params
    const response = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: 
                        `주문이 완료되었어요.\n음료가 준비되면 알려드릴게요 :)\n\n주문 내역\n-------------\n${drinkName} ${cupCount}잔`
                    }
                }
            ]
        }
    }
    res.status(200).send(response);
});



router.post('/menu', function(req, res) {

    console.log("body", req.body)
    const menu = [
        'americano', 
        'cafe late', 
        'cafe moca',
        'vanilla late',
        'mint tea',
        'earlgrey tea'
    ]
    
    // const { name, quantity } = req.body.action.params
    const response = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: '아메리카노, 카페라떼',
                    }
                }
            ]
        }
    }
    
    res.status(200).send(response);
});




// router.post('/removeOrder', removeOrderController);

module.exports = router;