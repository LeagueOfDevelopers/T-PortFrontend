import React from "react";
import styled from "styled-components";

const StyledButton = styled.input`
    display: inline-block;
    background-color: red;
`;

const SearchButton = () => {
  return <StyledButton type="submit" value="поиск" />;
};

export default SearchButton;
