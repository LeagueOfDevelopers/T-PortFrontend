import React from "react";
import styled from "styled-components";

const StyledInfoLabel = styled.div`
  background-color: ${props => {
    return props.selected ? "#007aff" : "#f1f3f4";
  }};
  color: ${props => (props.selected ? "white" : "#007aff")};

  display: block;
  position: relative;
  width: 241px;
  height: 45px;
  border-radius: 4px;
  ${props => props.selected ? "border-top-right-radius: 0; border-bottom-right-radius: 0;": ''}
  margin-bottom: 17px;
  /* text-align: center; */
  cursor: pointer;
`;

const StyledText = styled.label`
  display: inline-block;
  margin: auto auto;
`;

const SelectedTriangle = styled.div`
  display: ${props => (props.selected ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 100%;
  width: 0;
  height: 0;
  border-top: 22.4px solid transparent;
  border-left: 30px solid #007aff;
  border-bottom: 22.4px solid transparent;
  /* border-right: 4px solid transparent; */
  /* border-radius: 4px; */
`;

const InfoLabel = props => {
  return (
    <StyledInfoLabel
      onClick={props.onClick}
      selected={props.selected}
      id="edededededed"
    >
      <StyledText>{props.text || "Грязный говнюк"}</StyledText>
      <SelectedTriangle selected={props.selected} />
    </StyledInfoLabel>
  );
};

export default InfoLabel;
