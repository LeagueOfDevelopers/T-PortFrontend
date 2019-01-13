import React, { Component } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  display: inline-block;
  /* height: 176px; */
  padding-top: 14px;
  padding-bottom: 27px;
  background-color: #f1f3f4;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 8px;
  width: fit-content;
`;

const CardInputWpapper = styled.div`
  display: inline-block;
  box-sizing: border-box;
  padding: 0 12px;

`;

const CardNumberWrapper = styled(CardInputWpapper)`
  width: 70%;
`;

const CardCVCWrapper = styled(CardInputWpapper)`
  width: 30%;
  /* max-width: 60px; */
`;

const CardInput = styled.input`
  height: 30px;
  width: 100%;
  background-color: white;
  border: 0;
  border-radius: 8px;
  text-align: center;
  letter-spacing: 0.8px;
  &::placeholder {
    letter-spacing: 0.8px;
  }
  margin-top: 12px;
`;

const CardInputLable = styled.label`
  display: block;
  font-size: 15px;
  letter-spacing: 0.9px;
`;

const CardNumber = styled(CardInput)`
  margin-bottom: 15px;
`;

const CardCVC = styled(CardInput)`
 
  margin-bottom: 15px;
`;

const CardExp= styled(CardInput)`
  
`;

const VisaLogo = styled.img`
  
`;

class BankCardTemplate extends Component {
  state = {
    number: ""
  };

  handleNumberChange = e => {
    if (
      this.state.number.length > e.target.value.length &&
      /^\d*$/.test(this.getRawNumber(e.target.value))
    ) {
      this.setState({
        number: this.getFormattedNumber(e.target.value)
      });
    }
  };

  handleKeyDown = e => {
    if (/\d/.test(e.key) && this.getRawNumber(e.target.value).length < 16) {
      this.setState({
        number: this.getFormattedNumber(e.target.value + e.key)
      });
    }
  };

  getFormattedNumber = num => {
    let a = num
      .replace(/\s/g, "")
      .split("")
      .map((letter, id) => {
        if (id !== 0 && id % 4 === 0) {
          return " " + letter;
        }
        return letter;
      })
      .join("");
    return a;
  };

  getRawNumber = fnum => {
    return fnum.replace(/\s/g, "");
  };

  render() {
    return (
      <StyledCard>
        <form className="checkout">
          <CardNumberWrapper>
            <CardInputLable htmlFor="cc-number">Номер карты</CardInputLable>
            <CardNumber
              type="text"
              id="cc-number"
              autoComplete="cc-number"
              placeholder="4111 1111 1111 1111"
              onChange={this.handleNumberChange}
              value={this.state.number}
              onKeyDown={this.handleKeyDown}
            />
          </CardNumberWrapper>
          <CardCVCWrapper>
            <CardInputLable htmlFor="CVC">CVC</CardInputLable>
            <CardCVC
              id="CVC"
              autoComplete="cc-csc"
              type="password"
              placeholder="CVC"
            />
          </CardCVCWrapper>
          <CardInputWpapper>
            <CardInputLable htmlFor="cc-exp">Срок действия</CardInputLable>
            <CardExp
              type="text"
              id="cc-exp"
              placeholder="MM/YY"
              autoComplete="cc-exp"
            />
          </CardInputWpapper>
          <VisaLogo src="/assets/visa-logo.png" alt="visa-logo" width='92'></VisaLogo>
        </form>
      </StyledCard>
    );
  }
}

export default BankCardTemplate;
