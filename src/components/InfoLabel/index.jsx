import React from "react";
import styled from "styled-components";

const StyledInfoLabel = styled.div`
  background-color: ${props => {
    console.log("hihihihihih")
    return props.selected ? "#007aff" : "#f1f3f4";
  }};
  color: ${props => (props.selected ? "white" : "#007aff")};

  display: block;
  width: 241px;
  height: 45px;
  border-radius: 4px;
  margin-bottom: 17px;
  /* text-align: center; */
  cursor: pointer;
`;

const StyledText = styled.label`
  display: inline-block;
  margin: auto auto;
`;

const InfoLabel = props => {
  return (
    <StyledInfoLabel onClick={props.onClick} selected={props.selected} id="edededededed">
      <StyledText>{props.text || "Грязный говнюк"}</StyledText>
    </StyledInfoLabel>
  );
};

export default InfoLabel;
