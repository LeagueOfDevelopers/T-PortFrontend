import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { hideOn } from "../../utils/helpers";

const StyledHeader = styled.div`
  width: 100vw;
  height: 66px;
  margin: 0 auto 0 auto;
  font-size: 1em;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16); */
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.06);

  position: relative;
  z-index: 2;
  > a {
    text-decoration: none;
    color: #000;
    font-size: 20px;
    font-weight: normal;
    text-align: center;
  }
`;

const Logo = styled.img`
  
`;

const NoSmallWrapper = styled.span`
  ${hideOn}
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <NoSmallWrapper noSmall>
        <NavLink to="/home">
          <Logo src="assets/TPortLogo.png" width="100px" />
        </NavLink>
        </NoSmallWrapper>
        <NavLink to="/routesearch">ПОИСК</NavLink>
        <NavLink to="/myorders">ЗАКАЗЫ</NavLink>
        <NavLink to="/specialoffers">БОНУСЫ</NavLink>
        <NavLink to="/profile">ПРОФИЛЬ</NavLink>
      </StyledHeader>
    );
  }
}

export default Header;
