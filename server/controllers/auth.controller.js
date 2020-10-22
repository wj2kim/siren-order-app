const User = require('../models/auth.model');
const FirebaseTokenStore = require('../models/firebase.model');
// const expressJwt = require('express-jwt');
// const _ = require('lodash');
// const fetch = require('node-fetch');
const { validationResult } = require('express-validator');

/*
jwt -> json 포맷을 이용한 Web Token 
유저가 로그인 시 서버는 유저의 정보에 기반한 토큰을 발급하여 유저에게 전달해줍니다. 
이 후, 유저가 서버에 요청을 할 때 마다 jwt를 포함하여 전달합니다. 서버는 해당 토큰이 유효하고 인증됬는지 
검증하고, 유저가 요청한 작업에 권한이 있는지 확인하여 작업을 처리합니다PropTypes.any,

서버는 유저의 세션을 유지 할 필요가 없습니다. 즉 유저가 로그인 되어 있는지 안되어있는지 신경 쓸 필요가 없고 
유저가 요청했을때 토큰만 확인하면되니, 세션 관리도 필요 없어 자원을 아낄 수 있습니다. 
*/
const jwt = require('jsonwebtoken');

const { errorHandler } = require('../lib/dbErrorHandling');


/* 가입을 위한 페이지는 따로 만들지 않음 대신 POSTMAN을 이용함 */
exports.registerController = (req, res) => {
    const { name, email, password } = req.body
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        const firstError = errors.array().map(error => error.msg)[0];
        return res.status(422).json({
            error: firstError
        })
    }else{
        User.findOne({
            email
        }).exec((err, user) => {
            if(user) {
                return res.status(400).json({
                    error: "Email is taken"
                })
            }
        })

        const user = new User({
            name,
            email,
            password
        });
  
        user.save((err, user) => {
            if (err) {
                console.log('Save error', errorHandler(err));
                return res.status(401).json({
                    errors: errorHandler(err)
                });
            } else {
                return res.json({
                    success: true,
                    message: user,
                    message: '회원가입을 완료했습니다. 😉'
                });
            }
        });
    }
}


exports.loginController = (req, res) => {
    const {email, password} = req.body;
    /* 유효성 체크 */
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        /* 유효성을 위반한 에러가 하나라도 있을 시 */
        const firstError = errors.array().map(error => error.msg)[0]
        /* 422 Unprocessable Entity - 요청은 잘 만들어 졌지만, 문법 오류로 인하여 따를 수 없습니다. */
        return res.status(422).json({
            message:firstError
        });
    }else{
        /* 유저 존재 유무 확인 */
        User.findOne({
            email
        }).exec((err, user) => {
            /* 400 Unauthorized - 비인증( unauthenticated )을 의미한다. 
            클라이언트는 요청한 응답을 받기 위해서 반드시 스스로를 인증해야함 */
            if(err || !user){
                return res.status(400).json({
                    message: '이메일이 존재하지 않습니다. 🙄'
                })
            }

            /* 비밀번호 인증 */
            if(!user.authenticate(password)){
                return res.status(400).json({
                    message: '이메일 혹은 비밀번호가 틀렸습니다. 😦'
                })
            };

            /* token 생성 */
            const token = jwt.sign(
                { _id: user._id }, 
                process.env.JWT_SECRET,
                { expiresIn: '1d' }
            );

            const { _id, name, email, role } = user
            return res.json({
                token,
                user: {
                    _id, 
                    name,
                    email,
                    role
                }
            });
        })
    }
}

exports.registerClientTokenController = (req, res) => {
    const firebaseToken = req.body.firebaseToken
    let message;
    let result;

    if(!firebaseToken){
        return res.status(400).json({
            messsage: '적절하지 않은 토큰 값입니다.'
        })
    }

    if(!FirebaseTokenStore.isExist(firebaseToken)){
        result = FirebaseTokenStore.insertOne(firebaseToken);
        message = '토큰 등록에 성공하였습니다.'
    }else{
        message = '토큰이 이미 등록되어 있습니다.'
    }
    return res.status(200).json({
        message,
    })
}