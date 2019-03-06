import React, { Component } from "react";
import styled from "styled-components";
import StyledInput from "../../PersonalInfoInput";

const PassportForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

class PassportTemplate extends Component {
  state = {};
  render() {
    return (
      <PassportForm id={this.props.id}>
        <StyledInput
          title="Имя"
          type="text"
          id="fnameInput"
          name="fname"
          autoComplete="given-name"
          placeholder="Иван"
          onChange={this.handleNameChange}
          value={this.state.name}
        />
        <StyledInput
          title="Фамилия"
          type="text"
          id="lnameInput"
          name="lname"
          autoComplete="family-name"
          placeholder="Иванов"
          onChange={this.handleNameChange}
          value={this.state.name}
        />
        <StyledInput
          title="Отчество"
          type="text"
          id="fatherName"
          name="father-name"
          autoComplete="off"
          placeholder="Иван"
          onChange={this.handleNameChange}
          value={this.state.name}
        />
        <StyledInput
          title="Серия"
          type="text"
          id="passport-series"
          autoComplete="cardholder"
          placeholder="MR CARDHOLDER"
          onChange={this.handleNameChange}
          value={this.state.name}
        />
        <StyledInput
          title="Номер"
          type="text"
          id="passport-number"
          autoComplete="cardholder"
          placeholder="MR CARDHOLDER"
          onChange={this.handleNameChange}
          value={this.state.name}
        />
        <StyledInput
          title="Дата выдачи"
          type="text"
          id="resdate"
          autoComplete="cardholder"
          placeholder="MR CARDHOLDER"
          onChange={this.handleNameChange}
          value={this.state.name}
        />
        <StyledInput
          title="Кем выдан"
          type="text"
          id="resname"
          autoComplete="cardholder"
          placeholder="MR CARDHOLDER"
          onChange={this.handleNameChange}
          value={this.state.name}
        />
        <StyledInput
          title="Код подразделения"
          type="text"
          id="ressubcode"
          autoComplete="cardholder"
          placeholder="MR CARDHOLDER"
          onChange={this.handleNameChange}
          value={this.state.name}
        />
      </PassportForm>
    );
  }
}

export default PassportTemplate;
