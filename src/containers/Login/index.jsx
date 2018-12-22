import React, { Component } from "react";
import styled from "styled-components";
import Input from "../../components/Input";
import Button from "../../components/Button";


const StyledLoginForm = styled.form`
  margin: calc(50vh - 200px) auto;
  width: auto;
  height: auto;
  background-color: white;
  position: relative;
  z-index: 100;
`;

class LoginForm extends Component {
  state = {};
  render() {
    return (
      <StyledLoginForm>
        <label htmlFor="login">Login</label>
        <br />
        <Input type="text" id="login" autoFocus />

        <br />
        <label htmlFor="password">Password</label>
        <br />
        <Input type="password" id="password" />
        <br />
        <Button type="submit" />
      </StyledLoginForm>
    );
  }
}

export default LoginForm;
