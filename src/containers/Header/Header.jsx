import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  display: flex;
  justify-content: space-around;
  background-color: greenyellow;
  align-items: center;

  > a {
    border: 2px solid palevioletred;
    border-radius: 3px;
    text-align: center;
    text-decoration:none;
  }
`;

const Logo = styled.h1`
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: inline-block;
`;

class Header extends Component {
  render() {
    return (
      <NavBar>
        <Logo>HUI</Logo>
        <NavLink to="/home">HOME</NavLink>
        <NavLink to="/routesearch">ROUTE SEARCH</NavLink>
        <NavLink to="/profile">prifile</NavLink>
        <NavLink to="/specialoffers">special offers</NavLink>
      </NavBar>
    );
  }
}

export default Header;
