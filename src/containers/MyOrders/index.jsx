import React, { Component } from 'react';
import styled from "styled-components";

const StyledMyOrders = styled.div``;
const StyledOrder = styled.div``;

class MyOrders extends Component {
    state = { orders: ['заказ 1','заказ 2','заказ 3','заказ 4'] }
    render() { 
        return ( 
        <StyledMyOrders>
            <h3>Ваши заказы</h3>
            <ul>{
                this.state.orders.map(order => <ul><StyledOrder>{order}</StyledOrder></ul>)
            }</ul>
        </StyledMyOrders> 
        );
    }
}
 
export default MyOrders;