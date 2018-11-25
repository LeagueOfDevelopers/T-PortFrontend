import React, { Component } from "react";
import styled from "styled-components";


const RouteSearchContents = styled.form`
  > input {
    display:inline-block;
    width:200px;
  }
`;

class RouteSearch extends Component {
  render() {
    return (
      <div>
        <form action="" method="get">
          <input type="text" placeholder="From"/>
          <input type="text" placeholder="To"/>
          <div>Filters</div>
          <div>results</div>
        </form>
      </div>
    );
  }
}

export default RouteSearch;
