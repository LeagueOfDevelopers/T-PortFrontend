import React from "react";
import styled from "styled-components";

const StyledLable = styled.div`
  height: 48px;
  font-size: 20px;
  font-weight: ${props => props.fontWeight};
`;

const SectionLable = props => {
  return <StyledLable fontWeight={props.fontWeight || "900"}>{props.text}</StyledLable>;
};

export default SectionLable;
