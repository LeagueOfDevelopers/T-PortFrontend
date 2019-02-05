import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  display: inline-block;
  border-radius: 0;
  /* background-color: red; */
  /* padding: 10px; */
  width: 100%;
  border: 0;
  /* height: ; */
  font-size: 1.5em;
  border-bottom: 2px solid #007aff;
  /* border-radius: 1em; */
  &:focus {
    outline: none;
  }
  font-size: 17px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.1px;
  /* color: #9b9b9b; */
  &::placeholder {
    color: red;
  }
`;

const Input = (props) => {
  return <StyledInput name={props.name} type={props.type} onChange={props.onChange} value={props.value} placeholder={props.placeholder || ''}/>;
};

export default Input;
