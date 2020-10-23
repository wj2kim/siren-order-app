const FirebaseTokenStore = () => {
    let tokens = [];

    return {
        isExist(token){
            return tokens.includes(token);
        }
        ,
        insertOne(token){
            if(!tokens.includes(token)){
                tokens.push(token);
                return true;
            }
            return false;
        },
        selectAll(){
            console.log("토큰스", tokens);
            return [...tokens];
        },
        removeOne(token){
            if(tokens.includes(token)){
                tokens.splice(tokens.indexOf(token), 1);
                console.log(tokens);
                return true;
            }
            return false;
            // const idx = subscribers.findIndex((subscriber) => subscriber.token === token);
            // if(idx > -1) subscribers.splice( idx, 1);
            // return [...subscribers];
        }
    }
}

module.exports = FirebaseTokenStore();