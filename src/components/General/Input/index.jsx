import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  display: block;
  border-radius: 0;
  /* background-color: red; */
  /* padding: 10px; */
  width: 100%;
  border: 0;
  padding: 0;
  /* height: ; */
  /* font-size: 1.5em; */

  /* border-radius: 1em; */

  &:focus {
    outline: none;
    box-shadow: 0 2px 7px 0 #dbdddd;
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

const Suggestions = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 0 0 11px 11px;
  box-shadow: 0 2px 7px 0 #dbdddd;
  /* &::after {
    position: absolute;
    content: '';
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: inherit;
    box-shadow: 0 2px 7px 0 #dbdddd;
    z-index: 1;
  } */
  display: none;
  left: 0;
  right: 0;
  z-index: 100;
  ${StyledInput}:focus+&, &:hover {
    display: block;
  }
  border-top: 1px solid #dfe1e5;
`;

const Suggestion = styled.div`
  padding: 8px;
  &:hover {
    background-color: #eee;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  display: inline-block;
  border-bottom: 1px solid #007aff;

  position: relative;
`;

const SuggestionComponent = styled.div`
  position: absolute;
  display: none;
  left: 0;
  right: 0;
  z-index: 100;
  ${props => {
    console.log(props.suggestionComponent);
    
  }}
  ${StyledInput}:focus+&, &:hover {
    display: block;
  }
`;

const Input = props => {
  //console.log("onsuggestion: "+props.onSuggestionClick);
  
  return (
    <InputWrapper>
      <StyledInput
        name={props.name}
        type={props.type || "text"}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder || ""}
        autoComplete={!!props.suggestions ? "off" : "on"}
        required={props.required}
        // pattern={props.pattern}
      />
      {!!props.suggestions && (
        <Suggestions>
          {props.suggestions.map(el => (
            <Suggestion key={el} onClick={props.onSuggestionClick.bind(null, el)}>{el}</Suggestion>
          ))}
        </Suggestions>
      )}
      {!!props.suggestionComponent && (
        <SuggestionComponent>{props.suggestionComponent}</SuggestionComponent>
      )}
    </InputWrapper>
  );
};

export default Input;
