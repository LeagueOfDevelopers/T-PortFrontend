import React, { Component } from 'react';
import styled from "styled-components";
import RouteCard from "../../components/VariantCard";

const StyledMyOrders = styled.div`
    max-width: 950px;
    margin: 0 auto;
`;
const StyledOrder = styled.div``;

const route = [
    { type: "taxi", title: "uber", cost: "399$" },
    { type: "plane", title: "Аэрофлот", cost: "399$" },
    { type: "plane", title: "leon", cost: "399$" },
    { type: "taxi", title: "Аэроэкспрессы", cost: "399$" }
  ];

class MyOrders extends Component {
    state = { orders: ['заказ 1','заказ 2','заказ 3','заказ 4'] }
    render() { 
        return ( 
        <StyledMyOrders>
            <div>Ваши заказы</div>
            <div><div>Текущий заказ</div> 
            <RouteCard arrival="ddD" cost="999$" route={route} paid/>
            </div>
            <div>Предстоящие поездки</div>
            <div>История</div>
        </StyledMyOrders> 
        );
    }
}
 
export default MyOrders;