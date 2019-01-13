import React from "react";
import styled from "styled-components";

const StyledButton = styled.input`
  display: inline-block;
  background-color: #007aff;
  padding: 6px 13px;
  border-radius: 25px;
  border-width: 0;

  font-size: 17px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;

  cursor: pointer;
`;

const Button = (props) => {
  return <StyledButton type="submit" value={props.value || "Найти"} />;
};

export default Button;
