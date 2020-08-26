const mongoose = require("mongoose");
const crypto = require('crypto');

/* userSchema 정의 */
const userSchema = new mongoose.Schema({
    email: {
        type:String,
        trim:true,
        required: true,
        unique: true,
        lowercase: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    hashed_password: {
        type: String,
        required: true,
    },
    salt: String,
    role: {
        type: String,
        enum: ['user', 'admin', 'master'],
        default: 'admin'
    }
}, { 
    timestamps: true
 })


/* 가상 비밀번호 만들어서 저장하기 (hasing) */
userSchema.virtual('password')
    .set(function(password){
        this._password = password;
        this.salt = this.makeSalt();
        this.hashed_password = this.encryptPassword(password)
    })
    .get(function(){
        return this._password;
    })


/* userSchema 함수 모음 */
userSchema.methods = {
    /* plain 비밀번호와 hashed 비밀번호를 비교 */
    authenticate: function (plainPassword) {
        return this.encryptPassword(plainPassword) === this.hashed_password;
    },

    /* salt 생성 */
    makeSalt: function () {
        return Math.round(new Date().valueOf() * Math.random()) + "";
    },
    
    /* encrypt 비밀번호 */
    encryptPassword: function( password ){
        if(!password) return "";
        try{
            return crypto
                .createHmac('sha1', this.salt)
                .update(password)
                .digest('hex')
        }catch (err) {
            return "";
        }
    },
}

module.exports = mongoose.model('User', userSchema);