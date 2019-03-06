import React, { Component, Fragment, useState } from "react";
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

const Roll = styled.div`
  position: absolute;
  right: 0;
  z-index: 10;
  /* width: fit-content; */
  max-height: ${props => props.folded ? "0" : "300px"};
  
  padding: ${props => props.folded ? "0" : "10px"} 10px;
opacity: ${props => props.folded ? "0" : "1"};
  /* display: flex;
  flex-direction: column; */
  overflow: hidden;

  transition: all ease 1s;

  background-color: white;
  border-radius: 11px;
  box-shadow: 0 2px 4px 0 rgba(150, 149, 149, 0.45);
  &  a {
    display: block;
    padding: 10px 0;
    text-decoration: none;
    color: #000;
    font-size: 20px;
    font-weight: normal;
    text-align: center;
  }
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

const Slices = props => (
  <HamWrapper onClick={props.onClick}>
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

//const DefaultLinks;

const links = [
  { to: "/routesearch", name: "ПОИСК" },

  { to: "/myorders", name: "ЗАКАЗЫ" },

  { to: "/specialoffers", name: "БОНУСЫ" },

  { to: "/profile", name: "ПРОФИЛЬ" }
];

const Header = props => {
  const [folded, setFolded] = useState(true);

  return (
    <FullWidthHeader>
      <StyledHeader>
        <NavLink to="/home">
          <Logo src="assets/TPortLogo.png" height="51px" />
        </NavLink>
        {links.map(el => (
          <LinkWrapper>
            <NavLink to={el.to}>{el.name}</NavLink>
          </LinkWrapper>
        ))}
      </StyledHeader>
      <Hamburger>
        <Slices onClick={() => setFolded(!folded)} />

        <Roll folded={folded}>
          {links.map(el => (
            <NavLink to={el.to}>{el.name}</NavLink>
          ))}
        </Roll>
      </Hamburger>
    </FullWidthHeader>
  );
};

export default Header;
