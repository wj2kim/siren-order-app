import React, { useState, useEffect } from 'react'
import { request, api } from 'utils/api';
import ko from 'date-fns/locale/ko';
import { format, parseJSON } from 'date-fns';


const Orders = () => {
    const [ orders, setOrders ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const selectOrdersURL = `/selectOrders`;
    const removeOrderURL = `/removeOrder`;

    useEffect(() => {
        loadOrders(selectOrdersURL);
    }, [])

    const loadOrders = async (requestURL, options = null) => {
        setIsLoading(true);
        try{
            let response;
            if(options){
                response = await request(requestURL, options);
            }else{
                response = await request(requestURL);
            }
            setOrders(responseParser(response.data.orders));
        }catch(err){
            console.log("loadOrders err", err);
            // 에러 처리 해아 함
        }
        setIsLoading(false);
    }

    const responseParser = (orders) => {
        const data = orders.map( order => {
            return {
                ...order,
                data: format(parseJSON(order.timeInMs), "yyyy-MM-dd a p:ss", {
                    locale: ko,
                })
            }
        });
        return data;
    }


    const handleFinished = (e, id) => {
        e.preventDefault();
        loadOrders(removeOrderURL, id);
      }

    return(
        <>
            { isLoading ? (
                <p>Loading ...</p>
            ) : (
                <ul>
                    {orders.length > 0 ? (
                        orders.map(order => (
                        <li key={order.orderId}>
                            <p>{order.orderId}</p>
                            <p>{order.drinkName}</p>
                            <p>{order.cupCount}</p>
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
            )}
        </>
    )
}

export default Orders;