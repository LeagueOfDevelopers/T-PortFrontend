import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Slim from "../../components/General/SlimWrapper";
import { media, hideOn } from "../../utils/helpers";

const StyledHeader = styled(Slim)`
  /* width: 100vw; */
  /* max-width: 950px; */
  height: 66px;
  /* ${media.large`
  margin: 0 auto;
  `} */
padding-top: 0;
  font-size: 1em;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16); */

  position: relative;
`;

const FullWidthHeader = styled.div`
  width: 100vw;
  box-sizing: border-box;
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.06);
  position: relative;
  z-index: 2;
  /* ${media.medium`
    padding: 0 20px;
  `} */
`;

const Logo = styled.img`
  position: relative;
  top: 4px;
`;

const NoSmallWrapper = styled.span`
  ${hideOn}
`;

const LinkWrapper = styled.div`
  & > a {
    text-decoration: none;
    color: #000;
    font-size: 20px;
    font-weight: normal;
    text-align: center;
  }
  ${media.small`
  /* & > a {
    font-size: 16px; 
    font-size: 5vw;
  } */
  display: none;
  `}
`;

const Hamburger = styled.div`
  /* display: inline-block; */
  position: absolute;
  /* background-color: red; */
  right: 0;
  top: 0;
  bottom: 0;
  width: 60px;
  display: none;
  ${media.small`
    display: block;
  `}
`;

const Slices = () => (
  <HamWrapper>
    <Slice />
    <Space />
    <Slice />
    <Space />
    <Slice />
  </HamWrapper>
);

const HamWrapper = styled.div`
  margin: auto auto;
  width: 50px;
  height: fit-content;
  /* display: inline-block; */
`;

const Slice = styled.div`
  height: 8px;
  border-radius: 5px;
  background-color: #007aff;
`;

const Space = styled.div`
  height: 6px;
`;

const Roll = styled.div`
    
`;

//const DefaultLinks;

const Header = (props) => {

  //const [folded, setFolded] = useSate(true);

    return (
      <FullWidthHeader>
        <StyledHeader>
          <NavLink to="/home">
            <Logo src="assets/TPortLogo.png" height="51px" />
          </NavLink>
          <LinkWrapper>
            <NavLink to="/routesearch">ПОИСК</NavLink>
          </LinkWrapper>
          <LinkWrapper>
            <NavLink to="/myorders">ЗАКАЗЫ</NavLink>
          </LinkWrapper>
          <LinkWrapper>
            <NavLink to="/specialoffers">БОНУСЫ</NavLink>
          </LinkWrapper>
          <LinkWrapper>
            <NavLink to="/profile">ПРОФИЛЬ</NavLink>
          </LinkWrapper>
        </StyledHeader>
        <Hamburger >
          <Slices />
        </Hamburger>
      </FullWidthHeader>
    );
  }


export default Header;
