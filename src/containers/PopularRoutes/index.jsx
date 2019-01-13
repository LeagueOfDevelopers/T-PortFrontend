import React, { Component, Fragment } from "react";
import styled from "styled-components";
import PopularCard from "../../components/PopularCard";

const StyledPopularRoutes = styled.div`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1350px;
  margin: 0 auto;
`;

const PopularName = styled.h3`
  font-family: LucidaGrande;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.1px;
  text-align: center;
  color: #000000;
`;

class PopularRoutes extends Component {
  state = {
    //fetch from server
    populars: ["Мальдивы", "Канары", "Ибица", "Ебица"]
  };
  render() {
    return (
      <Fragment>
        <PopularName>Популярные направления</PopularName>
        <StyledPopularRoutes>
          {this.state.populars.map((offer, i) => (
            <PopularCard key={offer + i}>{offer}</PopularCard>
          ))}
        </StyledPopularRoutes>
      </Fragment>
    );
  }
}

export default PopularRoutes;
