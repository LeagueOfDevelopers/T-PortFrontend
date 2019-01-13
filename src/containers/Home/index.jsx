import React from "react";
import styled from "styled-components";
import SearchForm from "../../components/SearchForm";
import PopularRoutes from "../PopularRoutes";

const StyledHome = styled.div`
  width: 100vw;
`;

const SearchWrapper = styled.div`
  padding-top: 56px;
  padding-bottom: 126px;
  background-image: linear-gradient(
      to bottom,
      rgba(3, 59, 121, 0.49),
      rgba(66, 82, 100, 0.31)
    ),
    url("https://www.wallpaperup.com/uploads/wallpapers/2016/03/30/918988/d29264bc683df42ae189a351116ce0da-700.jpg");

  background-size: auto, cover;
  background-position: center;
`;

const MottoWrapper = styled.div`
  height: 141px;
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  color: #ffffff;
`;

// TODO ? search redirect or not ? if not how ?
const Home = () => {
  return (
    <StyledHome>
      <SearchWrapper>
        <MottoWrapper>Type something</MottoWrapper>
        <SearchForm />
      </SearchWrapper>
      <PopularRoutes />
    </StyledHome>
  );
};

export default Home;
