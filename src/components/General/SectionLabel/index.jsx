import React from "react";
import styled from "styled-components";

const StyledLabel = styled.div`
  min-height: 48px;
  font-size: 20px;
  font-weight: ${props => props.fontWeight};
`;

const SectionLabel = props => {
  return <StyledLabel fontWeight={props.fontWeight || "900"}>{props.text || props.children}</StyledLabel>;
};

export default SectionLabel;
