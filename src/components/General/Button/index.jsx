import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  background-image: radial-gradient(circle at 50% 21%, #00b2ff, #007aff);
  border-image: none;
  padding: 10px 25px;
  border-radius: 11px;
  border-width: 0;

  /* for Safari */
  margin: 0;

  font-size: 17px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;

  cursor: pointer;
  outline: none;
`;

const Button = props => {

  return <StyledButton type="submit" form={props.form}>{props.value || "Найти"}</StyledButton>;
};

export default Button;
