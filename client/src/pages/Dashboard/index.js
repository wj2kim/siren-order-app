import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'containers/NavBar';
import { PageWrapper } from 'components/PageWrapper';
import { request, api } from 'utils/api';
import { ToastContainer } from 'react-toastify';
import { setCookie, getCookie } from 'utils/cookie';

import Orders from 'containers/Orders';
import { requestFirebaseNotificationPermission } from 'utils/firebase-client';




const Dashboard = (props) => {
  // const [ orders, setOrders ] = useState([]);
  
  useEffect(() => {
    // if(getCookie('firebaseToken')){
    // return;
    // }
    requestFirebaseNotificationPermission()
    .then((firebaseToken) => {
      console.log("발급 받은 파이어베이스 토큰", firebaseToken);
      sendFirebaseTokenToServer(firebaseToken);
    })
    .catch((err) => {
      console.log("파이어베이스 토큰 요청 에러", err)
      return err;
    });

    const sendFirebaseTokenToServer = async ( firebaseToken ) => {
      const requestURL = `/registerClientToken`;
      // const clientInfo = {
      //   browserName : navigator.appName,
      //   firebaseToken,
      //   deviceInfo : navigator.userAgent,
      //   browserLanguage : navigator.language,
      // }
      try {
        const response = await request(requestURL, { firebaseToken });
        console.log("res", response);
        if(response.status === 200){
          setCookie("firebaseToken", firebaseToken, 1);
        }
        console.log("서버에 토큰 전송 : ", response.data.message);
        
      }catch(err){
        console.log("err",err)
        if(err.response.status === 400){
          console.log("서버에 토큰 전송 : ", err.response.data.message);
        }
      }
    }
  },[]);

  return (
    <div className="main-page-wrapper" style={{ marginTop: '4rem'}}>
      <Helmet>
        <title>Dashboard</title>
        <meta
          name="description"
          content="Siren Order App Dashboard Page"
        />
      </Helmet>
      {/* <NavBar /> */}
      <ToastContainer
       autoClose={7000}
       position="top-right"
       closeOnClick
       pauseOnFocusLoss
       draggable
       pauseOnHover
       />
      <PageWrapper>
        <div>
          <div className="page-content" >
              <Orders />
          </div>
        </div>
        {/* <Masthead /> */}
        {/* <Features /> */}
      </PageWrapper>
    </div>
  );
}

export default Dashboard;
