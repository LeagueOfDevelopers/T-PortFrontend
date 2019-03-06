import React, { Component } from "react";
import styled from "styled-components";
import Input from "../../components/General/Input";
import Button from "../../components/General/Button";
import { media } from "../../utils/helpers";

const StyledLoginForm = styled.form`
  /* position: absolute; */
  /* left: calc(50vw - 200px); */
  /* bottom:calc(50vh); */
  position: relative;
  z-index: 200;
  box-sizing: border-box;
  /* width: 100%; */
  max-width: 400px;
  /* margin-left: auto; */
  /* margin-right: auto; */
  /* margin-bottom: 50vh; */
  /* height: fit-content; */
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  text-align: start;

  ${media.small`
    margin-left: 20px;
    margin-right: 20px;
  `}
`;

const ButtonWrapper = styled.div`
  margin-top: 16px;
`;

class LoginForm extends Component {
  state = {
    stage: 1
  };

  handlePhone = e => {
    e.preventDefault();
    let tel = e.target[0].value;
    tel = tel.replace(/[\s-()]/g, "");
    console.log(tel);

    fetch("http://tport-test.lod-misis.ru/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        phone: tel
      })
    })
      .catch(er => console.log("did not sent telephone"))
      .then(res => {
        console.log("successfully sent telephone", res);
      })
      .then(res => console.log("hiF"));
  };
  render() {
    return (
      <StyledLoginForm onSubmit={this.handlePhone}>
        <label htmlFor="phone">Введите номер телефона для регистрации</label>
        <Input type="tel" id="phone" name="phone" autocomplete="tel" required />
        {/* <label htmlFor="password">Password</label>
        <Input type="password" id="password" /> */}
        <ButtonWrapper>
          <Button type="submit" value="Войти" />
        </ButtonWrapper>
      </StyledLoginForm>
    );
  }
}

export default LoginForm;
