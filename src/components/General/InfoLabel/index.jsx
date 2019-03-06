import React from "react";
import styled from "styled-components";

const StyledInfoLabel = styled.div`
  background-color: ${props => (props.selected ? "#f2f2f2" : "transparent")};
  color: ${props => (props.selected ? "#007aff" : "black")};
  display: block;
  position: relative;
  /* height: 45px; */
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 36px;
  box-sizing: border-box;
  border-left: ${props => (props.selected ? "6px solid #007aff" : "0")};
  transition: border-left 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);;
  cursor: pointer;
`;

const StyledText = styled.label`
  display: inline-block;
  margin: auto auto;
`;

const InfoLabel = props => {
  return (
    <StyledInfoLabel
      onClick={props.onClick}
      selected={props.selected}
      id={props.text}
    >
      <StyledText>{props.text || "Грязный говнюк"}</StyledText>
    </StyledInfoLabel>
  );
};

export default InfoLabel;
