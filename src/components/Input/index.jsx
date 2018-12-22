import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  display: inline-block;
  /* background-color: red; */
  /* padding: 10px; */
  width: 100%;
  border: 0;
  /* height: ; */
  font-size: 1.5em;
  border-bottom: 2px solid #007aff;
  /* border-radius: 1em; */
  
`;

const Input = (props) => {
  return <StyledInput name={props.name} type={props.type} onChange={props.onChange} value={props.value}/>;
};

export default Input;
