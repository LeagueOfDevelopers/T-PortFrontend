import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.div`
  font-size: 1.5em;
  text-align: center;

  display: flex;
  justify-content: space-around;
  
  align-items: center;
  color: palevioletred;
  max-width: 1200px;
  margin:auto;

  > a {
    /* border: 2px solid palevioletred;
    border-radius: 3px; */
    text-align: center;
    text-decoration: none;
  }
`;

const Logo = styled.h1`
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: inline-block;
`;

const StyledHeader = styled.header`
  width: 100%;
  background-color: greenyellow;
  
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <NavBar>
          <NavLink to="/home">
            <Logo>HUI</Logo>
          </NavLink>
          <NavLink to="/routesearch">Поиск маршрутов</NavLink>
          <NavLink to="/profile">Личный кабинет</NavLink>
          <NavLink to="/myorders">Мои заказы</NavLink>
          <NavLink to="/specialoffers">Бонусы</NavLink>
        </NavBar>
      </StyledHeader>
    );
  }
}

export default Header;
