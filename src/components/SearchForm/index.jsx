import React, { Component } from "react";
import styled from "styled-components";
import SearchInput from "../SearchInput";
import SearchFilters from "./SearchFilters";
import SearchButton from "../SearchButton";

const SearchFormContents = styled.form`
  display: inline-block;
  border: 2px solid black;
  padding: 8px 16px;
  border-radius: 36px;
`;

class SearchForm extends Component {
  state = {};

  render() {
    return (
      <SearchFormContents onSubmit={this.props.onSubmit}>
        <label htmlFor="from">Откуда</label>
        <SearchInput type="text" id="from" />
        <label htmlFor="to">куда</label>
        <SearchInput type="text" id="to" />
        <SearchFilters>Фильтры</SearchFilters>
        <SearchButton />
      </SearchFormContents>
    );
  }
}

export default SearchForm;
