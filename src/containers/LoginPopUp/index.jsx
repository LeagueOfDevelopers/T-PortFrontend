import React, { Component } from "react";
import styled from "styled-components";
import LoginForm from "../Login";

const OverLay = styled.div`
  /* display: ; */
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
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
      <div hidden={this.state.hidden} >
        <LoginForm/>
        <OverLay onClick={this.handleOnBlur} />
        
      </div>
    );
  }
}

export default LoginPopUp;
//onBlur={this.props.onBlurHandler}
