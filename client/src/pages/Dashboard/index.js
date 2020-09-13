import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'containers/NavBar';
import { PageWrapper } from 'components/PageWrapper';
import { request, api } from 'utils/api';
import ko from 'date-fns/locale/ko';
import { format, parseJSON } from 'date-fns';

const Dashboard = (props) => {
  const [ orders, setOrders ] = useState([]);

  /* 페이지 진입 시 서버로 부터 오더 리스트 가지고 오기 */
  useEffect(() => {
    async function loadOrders() {
      const requestURL = `/orders`;
      const response = await request(requestURL);
      // const response = await api.get(requestURL);
      handleResponse(response);
    }
    loadOrders();
  },[]);

  const handleFinished = (e, id) => {
    e.preventDefault();
    console.log("id", id);
    async function removeOrderAndReload() {
      const response = await request('/removeOrder', { id });
      console.log("remove response", response.data.orders);
      handleResponse(response);
    }
    removeOrderAndReload();
  }

  const handleResponse = (response) => {
    const data = response.data.orders.map( order => {
      return {
        ...order,
        date: format(parseJSON(order.date), "yyyy-MM-dd a/p:ss", {
          locale: ko,
        })
      }
    });
    setOrders(data);
  }


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
      <PageWrapper>
        <div>
          <div>Dashboard Page 입니다.</div>
          <div>
            <ul>
              {orders.length > 0 ? (
                orders.map(order => (
                  <li key={order.id}>
                    <p>{order.content}</p>
                    <span>
                      {order.date}
                    </span>
                    <button type="button" onClick={ (e) => handleFinished(e, order.id ) }>완료</button>
                  </li>
                ))
              ) : (
                <li>
                  <em>주문 내역이 없습니다.</em>
                </li>
              )}
            </ul>
          </div>
        </div>
        {/* <Masthead /> */}
        {/* <Features /> */}
      </PageWrapper>
    </>
  );
}

export default Dashboard;
