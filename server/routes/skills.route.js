const express = require('express');
const router = express.Router();

// const orderIdGenerator = require('../lib/orderIdGenerator');
const { orderIdGenerator } = require('../lib/orderIdManager');

// const orderIdGenerator = OrderIdGenerator();


/* 카카오 오픈빌더 스킬 관련 controller 가져오기 */
// const {
//     selectOrdersController,
//     removeOrderController,
// } = require('../controllers/orders.controller.js');

router.post('/announcement', function(req, res) {
    const response = {
        version: "2.0",
        template: {
            outputs: [
                {
                "simpleText": {
                        text: "공지\n\n💡오늘은 카페 공사 일정으로 인해 4시에 마감합니다.\n"
                    },
                },
                {

                    "carousel": {
                        "type": "basicCard",
                        "items": [
                          {
                            "title": "주문하기",
                            "description": "지금 바로 주문을 해보세요!",
                            "thumbnail": {
                              "imageUrl": "https://www.fluentu.com/blog/german/wp-content/uploads/sites/5/2016/06/how-to-order-coffee-in-german.jpg"
                            },
                            "buttons": [
                              {
                                "label": "주문하기",
                                "action": "message",
                                "messageText": "주문하기"
                              },
                            ]
                          },
                          {
                            "title": "메뉴보기",
                            "description": "주문 가능한 메뉴를 확인해 보세요!",
                            "thumbnail": {
                              "imageUrl": "https://previews.123rf.com/images/marchie/marchie1606/marchie160600028/59488695-%EC%BB%A4%ED%94%BC-%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91-%EC%95%88%EB%82%B4-%EC%B1%85%EC%9E%90-%EB%B2%A1%ED%84%B0-%EC%BB%A4%ED%94%BC-%EC%88%8D-%EB%A9%94%EB%89%B4-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%86%90%EC%9C%BC%EB%A1%9C-%EA%B7%B8%EB%A6%B0%E2%80%8B%E2%80%8B-%EA%B7%B8%EB%9E%98%ED%94%BD-%EB%B2%A1%ED%84%B0-%EC%B9%B4%ED%8E%98-%ED%85%9C%ED%94%8C%EB%A6%BF%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%BB%A4%ED%94%BC-%EC%A0%84%EB%8B%A8%EC%A7%80-.jpg"
                            },
                            "buttons": [
                              {
                                "label": "메뉴보기",
                                "action": "message",
                                "messageText": "메뉴보기"
                              },
                            ]
                          }
                        ]
                    }
                }
            ]
        }
    }
    res.status(200).send(response);
});


function manageOrder( body = null ) {
    if(body){
        const { drinkName, cupCount } = body.action.params;
        const { botUserKey, isFriend, plusfriendUserKey } = body.userRequest.user.properties;
        // console.log("properties", body.userRequest.user.properties);

        const timeInMs = Date.now();

        // const orderIdGenerator = () => {
        //     const everyDay = schedule.scheduleJob('10 * * * * *', function(){
        //         console.log('매 10초에 실행되나');
        //     });
        // }

        // orderIdGenerator();
        // 필요한 라이브러리 
        // time generator 
        // orderId generator 
        // orderProperty -> orderManager 라는 자료구조에 추가하기

        const orderId = orderIdGenerator.getOrderId();
        
        const orderProperty = {
            orderId,
            timeInMs,
            plusfriendUserKey,
            drinkName,
            cupCount,
        }

        console.log("오더 정보", orderProperty);

        return orderProperty;
        // 날짜 생성 
        // 주문 번호 생성 
        // 주문 번호 , 날짜, 
    }
}


router.post('/order', function(req, res) {
    const body = req.body;
    const { orderId, drinkName, cupCount } = manageOrder(body)
    // const { drinkName, cupCount } = req.body.action.params
    const response = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: 
                        `✅ 주문이 완료되었어요.\n\n주문번호 [${orderId}]\n음료가 준비되면 알려드릴게요 💁‍♀️ \n\n주문 내역\n-------------\n${drinkName} ${cupCount}잔`
                    }
                }
            ]
        }
    }
    res.status(200).send(response);
});



router.post('/menu', function(req, res) {

    console.log("body", req.body);
    
    const response = 
        {
            "version": "2.0",
            "template": {
            "outputs": [
                {
                "listCard": {
                    "header": {
                    "title": "몽촌카페 메뉴를 소개합니다.",
                    "imageUrl": "https://c4.wallpaperflare.com/wallpaper/873/663/805/minimalism-coffee-cup-artwork-wallpaper-thumb.jpg"
                    },
                    "items": [
                    {
                        "title": "아메리카노",
                        "description": "피곤한 당신을 깨워줄게요",
                        "imageUrl": "https://globalassets.starbucks.com/assets/84ede138768e42ebb2e0366c2f09960a.jpg?impolicy=1by1_wide_1242",
                    },
                    {
                        "title": "카페 라떼",
                        "description": "달콤 고소한 커피 끝판왕",
                        "imageUrl": "https://globalassets.starbucks.com/assets/f9ad475efabb455887649f7dd453a90d.jpg?impolicy=1by1_wide_1242",
                    },
                    {
                        "title": "카페 모카",
                        "description": "오늘은 단게 땡긴다면",
                        "imageUrl": "https://globalassets.starbucks.com/assets/b308aad1127843c5b6e1390bd87a669e.jpg?impolicy=1by1_wide_1242",
                        "link": {
                        "web": "https://namu.wiki/w/%EC%96%B4%ED%94%BC%EC%B9%98"
                        }
                    }
                    ],
                    "buttons": [
                        {
                            "label": "주문하기",
                            "action": "message",
                            "messageText": "주문하기"
                        }
                    ]
                }
                }
            ]
            }
        }
    
    res.status(200).send(response);
});




module.exports = router;