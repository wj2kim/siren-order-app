import firebase from 'firebase/app';
import 'firebase/messaging';
  
  const firebaseConfig = {
    apiKey: "AIzaSyCNWa0vmmdN4L5DqKhJ-onq6uaLgBS2msU",
    authDomain: "siren-order-4979c.firebaseapp.com",
    databaseURL: "https://siren-order-4979c.firebaseio.com",
    projectId: "siren-order-4979c",
    storageBucket: "siren-order-4979c.appspot.com",
    messagingSenderId: "960085631910",
    appId: "1:960085631910:web:fa08ee92d81731b7406567",
    measurementId: "G-TY8MS4TLFF"
  };


  /**
   * 서버로 토큰 보내기
   * @param token
   */
  const sendTokenToServer = (token) => {
    const data = {
      device: {
        token: token,
        type: 'web',
      }
    }
  }

  const init = () => {
    firebase.initializeApp(firebaseConfig);
  
    /* 메시징 객체 검색 */
    const messaging = firebase.messaging();
    
    /* 앱에서 웹 사용자인증 정보  */
    // messaging.usePublicVapidKey('BI-5g_wp0KVuVVS-EZN_FWWtyk-fBIsIL__2CteKwi7uvSynMESNTTsN6gSQu9FiTES64V2vJCF4_3glUlEL59M');
    
    
    messaging.getToken().then((currentToken) => {
      if( currentToken ) {
        console.log("토큰", currentToken)
        // sendTokenToServer(currentToken);
        // updateUIForPushEnabled(currentToken);
      } else {
        // 권한 요청
        console.log("토큰을 받아오는데 실패")
        // 권한 요청 UI 노출 
        // updateUIForPushPermissionRequired();
        // setTokenSentToServer(false);
      }
    }).catch((err) => {
      console.log("토큰을 받아오는 도중 에러가 발생", err);
      // showToken('에러 토큰', err);
      // setTokenSentToServer(false);
    })

    /* 토큰 갱신 시 onTokenRefresh 콜백이 실행 됨*/
    messaging.onTokenRefresh(() => {
      messaging.getToken().then((refreshedToken) => {
        console.log('토큰 갱신.');
        // Indicate that the new Instance ID token has not yet been sent to the
        // app server.
        // setTokenSentToServer(false);
        // Send Instance ID token to app server.
        // sendTokenToServer(refreshedToken);
        // ...
      }).catch((err) => {
        console.log('토큰을 받아오는 도중 에러 발생', err);
        // showToken('토큰을 받아오는 도중 에러가 발생', err);
      });
    });




    // if(obj.swURL){
      //   swURL = obj.swURL;
      // }
      
      
      
    let swURL = `/public/fcm/firebase-messaging-sw.js`;
    
    navigator.serviceWorker.register(swURL).then(registeration => {
      messaging.useServiceWorker(registeration);
    
      messaging.requestPermission()
      .then(function(){
        console.log("Notification permission granted");
        return messaging.getToken();
      })
      .then(function(token){
        console.log('Firebase Token', token);
        // sendTokenToServer(token); for later
      })
      .catch(function(err){
        console.log('Firebase로 부터 권한을 획득하지 못했습니다.', err);
      })
    })
  }
  
  init();
   
  
  // this.unregister = () => {
  //   navigator.serviceWorker.getRegistration().then(registrations => {
  //     for( let registration of registeration ) {
  //       registration.unregister();
  //     }
  //   })
  // }






