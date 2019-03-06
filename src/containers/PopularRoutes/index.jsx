import React, { Component, Fragment } from "react";
import styled from "styled-components";
import PopularCard from "../../components/Route/PopularCard";

const Popular = styled.div``;

const RoutesContainer = styled.div`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1350px;
  margin: 0 auto;
`;

const PopularName = styled.div`
  /* font-family: LucidaGrande; */
  font-size: 40px;
  font-weight: bold;
  letter-spacing: -0.1px;
  /* text-align: center; */
  /* color: #000000; */
`;

class PopularRoutes extends Component {
  state = {
    //fetch from server
    populars: ["Мальдивы", "Канары", "Ибица", "Ебица"]
  };
  render() {
    return (
      <Popular>
        <PopularName>Популярные направления</PopularName>
        <RoutesContainer>
          {this.state.populars.map((offer, i) => (
            <PopularCard key={offer + i}>{offer}</PopularCard>
          ))}
        </RoutesContainer>
      </Popular>
    );
  }
}

export default PopularRoutes;
