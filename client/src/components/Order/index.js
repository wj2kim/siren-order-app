import React from 'react'
import PropsTypes from 'prop-types';
import styled from 'styled-components';


const Order = ( {order} ) => {
    console.log("12333", order);
    const { orderId, drinkName, cupCount, date, timeInMs } = order;
    
    return (
        <Wrapper >
            <Badge className="order-id" >{ orderId }</Badge>
            <Summary className="order-date" >{ date }</Summary>
            <Summary className="drink-name">{ drinkName }</Summary>
            <Summary className="cup-count">{ cupCount }</Summary>
            <Summary className="order-time-passed">{ timeInMs }</Summary>
            <Summary className="order-close">완료</Summary> 
        </Wrapper>
    )
}

Order.PropsTypres = {
    order : PropsTypes.object.isRequired,
    // orderId : PropsTypes.string.isRequired,
    // drinkName : PropsTypes.string.isRequired,
    // cupCount : PropsTypes.number.isRequired,
    // timeInMs : PropsTypes.timeInMs
}

// const Wrapper = styled.li`
//     display: grid;
//     height: auto;
//     grid-gap: 1rem;
//     grid-template-columns: repeat(6, 1fr);
//     border: 1px solid red;
//     padding: 5px;
// `;

const Wrapper = styled.li`
    display: flex;
    flex-direction: row;
    padding: 20px 30px;
    background-color: white;
    border-bottom: 2px dotted rgb(215, 215, 215);
    box-sizing: border-box;
    &:last-child {
        margin-bottom: none;
    }
`;

const Badge = styled.div`
    align-self: flex-start;
    display: block;
    width: 30px;
    height: 18px;
    margin-right: 20px;
    border: 1px dotted steelblue;
    color: steelblue;
    text-align: center;
    padding: 15px 8px;
`;

const Summary = styled.div`
    display: grid;
    place-items: center;
    text-align: center;
`


export default Order;