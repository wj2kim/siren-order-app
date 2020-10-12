import React, { useState, useEffect } from 'react'
import { request, api } from 'utils/api';
import ko from 'date-fns/locale/ko';
import { format, parseJSON } from 'date-fns';
import { onMessageListener } from 'utils/firebase-client';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Orders = () => {
    const [ orders, setOrders ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const selectOrdersURL = `/selectOrders`;
    const removeOrderURL = `/removeOrder`;

    useEffect(() => {
        loadOrders(selectOrdersURL);
    }, [])

    const loadOrders = async (requestURL, id = null) => {
        setIsLoading(true);
        try{
            let response;
            if(id){
                response = await request(requestURL, {id});
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
                date: format(parseJSON(order.timeInMs), "yyyy-MM-dd a p:ss", {
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

    onMessageListener()
        .then((payload) => {
            const { title, body } = payload.data;
            toast(`${title} 🥤 ${body}잔`,{
                position:"top-right",
                autoClose: 7000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            loadOrders(selectOrdersURL);
        }).catch((err) => {
            toast.error(JSON.stringify(err));
        })

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
                            <button type="button" onClick={ (e) => handleFinished(e, order.orderId ) }>완료</button>
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