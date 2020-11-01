import React, { useState, useEffect } from 'react'
import { request, api } from 'utils/api';
import ko from 'date-fns/locale/ko';
import { format, parseJSON } from 'date-fns';
import { onMessageListener } from 'utils/firebase-client';
import { toast } from 'react-toastify';
import Alert from '@material-ui/lab/Alert';
// import Order from 'components/Order';
import OrderTable from 'components/OrderTable';
import 'react-toastify/dist/ReactToastify.css';


const Orders = () => {
    const [ orderList, setOrderList ] = useState([]);
    const [ alert, setAlert] = useState({
        message: '',
        code: 0,
    });
    const [ isLoading, setIsLoading ] = useState(false);
    const selectOrdersURL = `/selectOrders`;
    const removeOrderURL = `/removeOrder`;

    useEffect(() => {
        loadOrders(selectOrdersURL);
    }, [])

    const loadOrders = async (requestURL, ids = []) => {
        setIsLoading(true);
        try{
            let response;
            if(ids.length){
                response = await request(requestURL, {ids});
            }else{
                response = await request(requestURL);
            }
            if( response.status === 200 ){
                if( response.data.orders.length ){
                    setOrderList(responseParser(response.data.orders));
                    setAlert({
                        message: '대기중인 주문이 있습니다.',
                        code: response.status
                    })
                }else{
                    setOrderList([]);
                    setAlert({
                        message: '주문 내역이 없습니다.',
                        code : response.status + 1
                    });
                }
            }else{
                setAlert({
                    message: '서버에서 주문 목록을 받아오지 못했습니다. 다시 한번 시도해 주시기 바랍니다.',
                    code: response.status
                });
            }
        }catch(err){
            console.log("loadOrders err", err);
            setAlert({
                message: '서버와의 통신에 실패했습니다. 다시 한번 시도해 주시기 바랍니다.',
                code: err.status
            });
            // 에러 처리 해아 함
        }
        setIsLoading(false);
    }

    const responseParser = (orderList) => {
        const data = orderList.map( order => {
            return {
                ...order,
                date: format(parseJSON(order.timeInMs), "yyyy-MM-dd p:ss", {
                    locale: ko,
                })
            }
        });
        return data;
    }
    
    const verifyAlertCode = (code) => {
        if(code === 201) return 'info'
        if(code === 200) return 'success'    
        return 'error';
    }

    const handleFinished = (e, ids) => {
        e.preventDefault();
        loadOrders(removeOrderURL, ids);
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
        <div className="orders-wrapper" style={{ marginTop:'2rem', marginBottom:'4rem'}}>
            { alert.message && <Alert severity={
                verifyAlertCode(alert.code)
                }>{alert.message}</Alert> }
            <OrderTable orderList={orderList} handleFinished={handleFinished}/>
        </div>
    )
}

export default Orders;