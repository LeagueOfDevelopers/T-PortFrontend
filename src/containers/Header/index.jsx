import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 80px;
  margin: 0 auto 20px auto;
  font-size: 1.5em;
  text-align: center;

  display: flex;
  justify-content: space-around;
  align-items: center;
  
  /* color: palevioletred; */
  
  /* border-bottom: 1px solid #f3efef; */
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);

  > a {
    text-align: center;
    text-decoration: none;
  }
  @media screen and (max-width: 980px) and (min-width: 601px){
    font-size: 1.3em;
  }
  @media screen and (max-width: 600px) {
    font-size: 1em;
  }
`;

const Logo = styled.div`
  /* border: 2px solid palevioletred; */
  /* border-radius: 3px; */
  display: inline-block;
  white-space: pre-wrap;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <NavLink to="/home">
          <Logo noSmall>T-Port</Logo>
        </NavLink>
        <NavLink to="/routesearch">Поиск маршрутов</NavLink>
        <NavLink to="/profile">Личный кабинет</NavLink>
        <NavLink to="/myorders">Мои заказы</NavLink>
        <NavLink to="/specialoffers">Бонусы</NavLink>
      </StyledHeader>
    );
  }
}

export default Header;
