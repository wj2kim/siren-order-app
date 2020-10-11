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

  /* 페이지 진입 시 서버로 부터 오더 리스트 가지고 오기 */
  useEffect(() => {
    requestFirebaseNotificationPermission()
    .then((firebaseToken) => {
    // eslint-disable-next-line no-console
      console.log(firebaseToken);
    })
      .catch((err) => {
      return err;
    });

    // requestFirebaseNotificationPermission()
    // .then((firebaseToken) => {
    //   if(firebaseToken){
    //     console.log("토큰", firebaseToken);
    //   }else{
    //     console.log("토큰을 받아오는데 실패")
    //   }
    // }).catch((err) => {
    //   console.log("토큰을 받아오는 도중 에러가 발생", err);
    //   return err;
    //   // showToken('에러 토큰', err);
    //   // setTokenSentToServer(false);
    // })


    // async function loadOrders() {
    //   const requestURL = `/orders`;
    //   const response = await request(requestURL);
    //   // const response = await api.get(requestURL);
    //   handleResponse(response);
    // }
    // loadOrders();
  },[]);


  // const handleResponse = (response) => {
  //   const data = response.data.orders.map( order => {
  //     return {
  //       ...order,
  //       date: format(parseJSON(order.timeInMs), "yyyy-MM-dd a p:ss", {
  //         locale: ko,
  //       })
  //     }
  //   });
  //   setOrders(data);
  // }


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
      <ToastContainer autoClose={3000} position="top-right"/>
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
