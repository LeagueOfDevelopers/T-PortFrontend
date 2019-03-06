import React from "react";
import styled from "styled-components";
import { media, hideOn } from "../../../utils/helpers";

const CardInputWpapper = styled.div`
  display: inline-block;
  box-sizing: border-box;
  /* padding: 0 12px; */
  width: 48%;
  ${media.small`
    width: 100%;
  `}
  margin-bottom: 15px;
  background-color: white;
  border-radius: 11px;
  padding: 10px 15px;
`;

const CardInput = styled.input`
  height: 30px;
  width: 100%;
  /* background-color: white; */
  border: 0;
  /* border-radius: 8px; */
  background-color: transparent;
  text-align: center;
  letter-spacing: 0.8px;
  text-align: left;
  &::placeholder {
    letter-spacing: 0.8px;
  }
  /* margin-top: 12px; */
`;

const CardInputLabel = styled.label`
  display: block;
  font-size: 15px;
  letter-spacing: 0.9px;
`;

const StyledInput = props => {
  return (
    <CardInputWpapper>
      <CardInputLabel htmlFor={props.id}>{props.title}</CardInputLabel>
      <CardInput
        type={props.type || "text"}
        id={props.id}
        name={props.name}
        autoComplete={props.autoComplete || "on"}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        onKeyDown={props.onKeyDown}
      />
    </CardInputWpapper>
  );
};

export default StyledInput;
