import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'containers/NavBar';
import { PageWrapper } from 'components/PageWrapper';
import { request, api } from 'utils/api';
import { ToastContainer } from 'react-toastify';

import Orders from 'containers/Orders';

import { requestFirebaseNotificationPermission } from 'utils/firebase-client';


const Dashboard = (props) => {
  // const [ orders, setOrders ] = useState([]);
  let tokenSent = false;

  /* 페이지 진입 시 서버로 부터 오더 리스트 가지고 오기 */
  useEffect(() => {
    if(!tokenSent){
      requestFirebaseNotificationPermission()
      .then((firebaseToken) => {
        console.log("발급 받은 파이어베이스 토큰", firebaseToken);
        sendFirebaseTokenToServer(firebaseToken);
        tokenSent = true;
      })
        .catch((err) => {
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
          console.log("서버에 토큰 전송 : ", response.data.message);
          
        }catch(err){
          if(err.response.status === 400){
            console.log("서버에 토큰 전송 : ", err.response.data.message);
          }
        }
      }
    }
  },[]);

  return (
    <>
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
          <div>Dashboard Page 입니다.</div>
          <div>
              <Orders />
          </div>
        </div>
        {/* <Masthead /> */}
        {/* <Features /> */}
      </PageWrapper>
    </>
  );
}

export default Dashboard;
