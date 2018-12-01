import React, { Component } from 'react';
import styled from "styled-components";

const StyledSpecialOffers = styled.div``;
const StyledOffer = styled.div``;

class SpecialOffers extends Component {
    state = { offers: ['предложение 1','предложение 2','предложение 3','предложение 4'] }
    render() { 
        return ( 
        <StyledSpecialOffers>
            <h3>Ваши заказы</h3>
            <ul>{
                this.state.offers.map(offer => <ul><StyledOffer>{offer}</StyledOffer></ul>)
            }</ul>
        </StyledSpecialOffers> 
        );
    }
}
 
export default SpecialOffers;