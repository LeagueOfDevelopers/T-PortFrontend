import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { hideOn } from "../../utils/helpers";

const StyledHeader = styled.div`
  width: 100vw;
  /* max-width: 1200px; */
  height: 66px;
  margin: 0 auto 0 auto;
  font-size: 1em;
  text-align: center;

  display: flex;
  justify-content: space-around;
  align-items: center;

  /* color: palevioletred; */

  /* border-bottom: 1px solid #f3efef; */
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);

  > a {
    text-decoration: none;
    color: #000;
    font-family: LucidaGrande;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.1px;
    text-align: center;
  }
`;

const Logo = styled.div`
  ${props => hideOn}
  white-space: pre-wrap;
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <NavLink to="/home">
          <Logo noSmall>T-Port</Logo>
        </NavLink>
        <NavLink to="/routesearch">ПОИСК</NavLink>
        <NavLink to="/myorders">ЗАКАЗЫ</NavLink>
        <NavLink to="/specialoffers">БОНУСЫ</NavLink>
        <NavLink to="/profile">ПРОФИЛЬ</NavLink>
      </StyledHeader>
    );
  }
}

export default Header;
