import React, { Component } from "react";
import styled from "styled-components";
import SearchInput from "../SearchInput";
import SearchFilters from "./SearchFilters";
import SearchButton from "../SearchButton";

const StyledSearchForm = styled.form`
  /* display: inline-block; */
  /* border: 2px solid black; */
  padding: 8px 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  max-width: 350px;
  margin: 0 auto;
`;

class SearchForm extends Component {
  state = {};

  render() {
    return (
      <StyledSearchForm onSubmit={this.props.onSubmit}>
        <label htmlFor="from">Откуда</label>
        <br/>
        <SearchInput type="text" id="from" />
        <br/>
        <label htmlFor="to">куда</label>
        <br/>
        <SearchInput type="text" id="to" />
        <br/>
        <label htmlFor="when">когда</label>
        <br/>
        <SearchInput type="date" id="when"/>
        <SearchFilters>Фильтры</SearchFilters>
        <SearchButton />
      </StyledSearchForm>
    );
  }
}

export default SearchForm;
