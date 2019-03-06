import React, { Component } from "react";
import styled from "styled-components";
import LoginForm from "../Login";

const OverLay = styled.div`
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  z-index: 150;
`;

const PopUpWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);
  /* display: flex; */
  justify-content: center;
  align-items: center;
  display: ${props => props.folded ? "none" : "flex"};
`;

const LoginFormWrapper = styled.div`
    
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
      <PopUpWrapper folded={this.state.hidden}>
        <OverLay onClick={this.handleOnBlur} />
        <LoginForm />
      </PopUpWrapper>
    );
  }
}

export default LoginPopUp;
//onBlur={this.props.onBlurHandler}
