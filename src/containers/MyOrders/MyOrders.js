import React, { Component } from 'react';
import styled from "styled-components";

const MyOrdersContents = styled.div``;
const OrderContents = styled.div``;

class MyOrders extends Component {
    state = { orders: ['заказ 1','заказ 2','заказ 3','заказ 4'] }
    render() { 
        return ( 
        <MyOrdersContents>
            <h3>Ваши заказы</h3>
            <ul>{
                this.state.orders.map(order => <ul><OrderContents>{order}</OrderContents></ul>)
            }</ul>
        </MyOrdersContents> 
        );
    }
}
 
export default MyOrders;