import React, { Component } from 'react';
import styled from "styled-components";

const SpecialOffersContents = styled.div``;
const OfferContents = styled.div``;

class SpecialOffers extends Component {
    state = { offers: ['предложение 1','предложение 2','предложение 3','предложение 4'] }
    render() { 
        return ( 
        <SpecialOffersContents>
            <h3>Ваши заказы</h3>
            <ul>{
                this.state.offers.map(offer => <ul><OfferContents>{offer}</OfferContents></ul>)
            }</ul>
        </SpecialOffersContents> 
        );
    }
}
 
export default SpecialOffers;