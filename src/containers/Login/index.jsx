import React, { Component } from "react";
import styled from "styled-components";
import Input from "../../components/Input";
import Button from "../../components/Button";


const StyledLoginForm = styled.form`
  position: absolute;
  left: calc(50vw - 200px);
  z-index: 100;
  width: 400px;
  height: fit-content;
  background-color: white;
  padding: 16px;
  border-radius: 8px;
`;

const ButtonWrapper = styled.div`
margin-top:16px;
`;

class LoginForm extends Component {
  state = {};
  render() {
    return (
      <StyledLoginForm>
        <label htmlFor="login">Login</label>
        <Input type="text" id="login" autoFocus />
        <label htmlFor="password">Password</label>
        <Input type="password" id="password" />
        <ButtonWrapper>
        <Button type="submit" value="Войти"/>
        </ButtonWrapper>
        
      </StyledLoginForm>
    );
  }
}

export default LoginForm;
