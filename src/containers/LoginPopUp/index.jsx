import React, { Component } from "react";
import styled from "styled-components";
import LoginForm from "../Login";

const OverLay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
`;

const PopUpWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 99;
`;

class LoginPopUp extends Component {
  state = {
    hidden: localStorage.getItem("lol") === "lel" ? true : false
  };

  handleOnBlur = () => {
    this.setState({ hidden: true });
  };

  render() {
    return (
      <PopUpWrapper hidden={this.state.hidden}>
        <LoginForm />
        <OverLay onClick={this.handleOnBlur} />
      </PopUpWrapper>
    );
  }
}

export default LoginPopUp;
//onBlur={this.props.onBlurHandler}
