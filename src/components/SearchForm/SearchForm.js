import React, { Component } from "react";
import styled from "styled-components";

const SearchFormContents = styled.form`
  input[type="text"] {
    background-color:red;
    border: 0;
    padding: 1;
    width: 40px;
  }

  > * {
    display: inline-block;
  }

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
        <input type="text" id="from" />
        <label htmlFor="to">куда</label>
        <input type="text" id="to" />
        <div>Фильтры</div>
        <input type="submit" value="поиск" />
      </SearchFormContents>
    );
  }
}

export default SearchForm;
