import React from "react";
import styled from "styled-components";

const StyledSearchInput = styled.input`
  display: inline-block;
  background-color: red;
  border: 0;
  padding: 1;
  width: 40px;
`;

const SearchInput = () => {
  return <StyledSearchInput />;
};

export default SearchInput;
