import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {media,  hideOn } from "../../utils/helpers";

const StyledHeader = styled.div`
  /* width: 100vw; */
  max-width: 950px;
  height: 66px;
  ${media.large`
  margin: 0 auto;
  `}
  
  font-size: 1em;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16); */
 

  position: relative;
  
  & > a {
    text-decoration: none;
    color: #000;
    font-size: 20px;
    font-weight: normal;
    text-align: center;
  }
`;

const FullWidthHeader = styled.div`
  width: 100vw;
  box-sizing: border-box;
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.06);
  position: relative;
  z-index: 2;
  ${media.medium`
    padding: 0 20px;
  `}
`;

const Logo = styled.img`
  position: relative;
  top: 4px;
`;

const NoSmallWrapper = styled.span`
  ${hideOn}
`;

class Header extends Component {
  render() {
    return (
      <FullWidthHeader>
        <StyledHeader>
          <NoSmallWrapper noSmall>
            <NavLink to="/home">
              <Logo src="assets/TPortLogo.png" height="51px" />
            </NavLink>
          </NoSmallWrapper>
          <NavLink to="/routesearch">ПОИСК</NavLink>
          <NavLink to="/myorders">ЗАКАЗЫ</NavLink>
          <NavLink to="/specialoffers">БОНУСЫ</NavLink>
          <NavLink to="/profile">ПРОФИЛЬ</NavLink>
        </StyledHeader>
      </FullWidthHeader>
    );
  }
}

export default Header;
