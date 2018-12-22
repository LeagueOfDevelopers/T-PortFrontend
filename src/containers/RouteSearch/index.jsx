import React, { Component } from "react";
import styled from "styled-components";
import SearchForm from "../../components/SearchForm";


const StyledRouteSearch = styled.main`
  > input {
    display: inline-block;
    width: 200px;
  }
`;

const SearchFormBg = styled.div`
  width: 100vw;
  /* height: 210px; */
  background-color: #033b79;
  padding: 50px 0;
`;

class RouteSearch extends Component {
  searchHandler = e => {
    console.log("aaaaaaaaaaa");
    e.preventDefault();
  };

  render() {
    return (
      <StyledRouteSearch>
        <SearchFormBg>
        <SearchForm onSubmit={this.searchHandler.bind(this)} />
        </SearchFormBg>
        
      </StyledRouteSearch>
    );
  }
}

export default RouteSearch;
