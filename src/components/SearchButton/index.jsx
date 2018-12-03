import React from "react";
import styled from "styled-components";

const StyledButton = styled.input`
    display: block;
    background-color: #d8d8d8;
    padding: 6px 10px;
    border-radius: 8px;
    margin: 20px auto 0 auto;

`;

const SearchButton = () => {
  return <StyledButton type="submit" value="подобрать" />;
};

export default SearchButton;
