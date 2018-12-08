import React, { Component } from "react";
import styled from "styled-components";
import SearchForm from "../../components/SearchForm";
import PopularRoutes from "../PopularRoutes";

const StyledRouteSearch = styled.main`
  > input {
    display: inline-block;
    width: 200px;
  }
`;

class RouteSearch extends Component {
  searchHandler = e => {
    console.log("aaaaaaaaaaa");
    e.preventDefault();
  };

  render() {
    return (
      <StyledRouteSearch>
        В этом разделе вы можете искать свой путь в этом бренном мире
        <br />
        <SearchForm onSubmit={this.searchHandler.bind(this)} />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        <br/>
        <PopularRoutes/>
      </StyledRouteSearch>
    );
  }
}

export default RouteSearch;
