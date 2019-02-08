import React, { Component } from "react";
import styled from "styled-components";
import StyledInput from "../PersonalInfoInput";
import { media, hideOn } from "../../utils/helpers";

const CardForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const getFormattedNumber = num => {
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

const getRawNumber = fnum => {
  return fnum.replace(/\s/g, "");
};

class BankCardTemplate extends Component {
  state = {
    number: "",
    cvc: "",
    name: ""
  };

  handleNumberChange = e => {
    if (
      this.state.number.length > e.target.value.length &&
      /^\d*$/.test(getRawNumber(e.target.value))
    ) {
      this.setState({
        number: getFormattedNumber(e.target.value)
      });
    }
  };

  handleNumberKeyDown = e => {
    if (/\d/.test(e.key) && getRawNumber(e.target.value).length < 16) {
      this.setState({
        number: getFormattedNumber(e.target.value + e.key)
      });
    }
  };

  handleNameChange = e => {
    console.log(e.target.value);
    this.setState({ name: e.target.value });
  };

  handleCvcChange = e => {
    console.log(e.target.value);
    this.setState({ cvc: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(
      "Submitted:",
      "\nCard number: ",
      e.target[0].value,
      "\nHolder: ",
      e.target[1].value
    );
  };

  render() {
    return (
      <CardForm id={this.props.id} onSubmit={this.handleSubmit}>
        <StyledInput
          title="Номер карты"
          type="text"
          id="cc-number"
          name="cardnumber"
          autoComplete="cc-number"
          placeholder="4111 1111 1111 1111"
          onChange={this.handleNumberChange}
          value={this.state.number}
          onKeyDown={this.handleNumberKeyDown}
        />
        <StyledInput
          title="CVC"
          type="password"
          id="cc-cvc"
          name="cvc"
          // it is cc-csc from docs
          autoComplete="cc-csc"
          onChange={this.handleCvcChange}
          value={this.state.cvc}
        />
        <StyledInput
          title="Держатель карты"
          type="text"
          id="cc-name"
          name="ccname"
          autoComplete="cardholder"
          placeholder="MR CARDHOLDER"
          onChange={this.handleNameChange}
          value={this.state.name}
        />
        <StyledInput
          title="Срок"
          type="text"
          id="cc-exp"
          name="cc-exp"
          // it is cc-csc from docs
          autoComplete="cc-exp"
          onChange={this.handleCvcChange}
          value={this.state.cvc}
        />
      </CardForm>
    );
  }
}

export default BankCardTemplate;
