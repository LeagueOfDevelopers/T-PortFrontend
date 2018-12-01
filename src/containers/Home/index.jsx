import React from "react";
import styled from "styled-components";
import SearchForm from "../../components/SearchForm";

const StyledHome = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: palevioletred;
`;

const Motto = styled.span`
  font-size: 2em;
`;
// TODO ? search redirect or not ? if not how ?
const Home = () => {
  return (
    <StyledHome>
      <Motto>Наш ультракрасивый слонан</Motto>
      <div>
        <span>Search</span>

        <SearchForm />
      </div>
      <div>
        <span>Popular</span>
      </div>
      <div>
        <span>We Bettet than others</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </StyledHome>
  );
};

export default Home;
