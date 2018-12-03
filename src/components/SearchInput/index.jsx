import React from "react";
import styled from "styled-components";

const StyledSearchInput = styled.input`
  /* display: inline-block; */
  /* background-color: red; */
  /* padding: 10px; */
  width: 100%;
  border: 0;
  /* height: ; */
  font-size: 1.5em;
  border-bottom: 1px solid #f3efef;
  /* border-radius: 1em; */
`;

const SearchInput = (props) => {
  return <StyledSearchInput type={props.type}/>;
};

export default SearchInput;
