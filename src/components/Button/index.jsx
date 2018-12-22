import React from "react";
import styled from "styled-components";

const StyledButton = styled.input`
  display: inline-block;
  background-color: #007aff;
  padding: 6px 13px;
  border-radius: 25px;
  /* height: 33px; */
  /* margin: 0 auto; */
  font-family: LucidaGrande;
  font-size: 17px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.1px;
  text-align: center;
  color: #ffffff;
`;

const Button = () => {
  return <StyledButton type="submit" value="Найти" />;
};

export default Button;
