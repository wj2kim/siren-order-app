const FirebaseTokenStore = () => {
    let subscribers = [];

    return {
        isExist(token){
            return subscribers.includes(token);
        }
        ,
        insertOne(token){
            if(!subscribers.includes(token)){
                subscribers.push(token);
                console.log("subscribers", subscribers);
                return true;
            }
            return false;
        },
        selectAll(){
            console.log(subscribers);
            return [...subscribers];
        },
        removeOne(token){
            if(subscribers.includes(token)){
                subscribers.splice(subscribers.indexOf(token), 1);
                console.log(subscribers);
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