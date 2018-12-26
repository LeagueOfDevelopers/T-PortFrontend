import React, { Component } from "react";
import styled from "styled-components";

const StyledCardsInfo = styled.div`
  display: inline-block;
  width: 629px;
`;

class BankCardsInfo extends Component {
  state = {};
  render() {
    return (
      <StyledCardsInfo>
        <span>тут карта</span>
        <span>тут сохраненки</span>
      </StyledCardsInfo>
    );
  }
}

export default BankCardsInfo;
