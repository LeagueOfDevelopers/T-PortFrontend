import React, { Component } from "react";
import styled from "styled-components";

const StyledPopularRoutes = styled.div`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledOffer = styled.div`
  height: 70px;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  margin-bottom: 15px;
  margin-right: 5px;
  margin-left: 5px;
  background-image: url("https://i.ytimg.com/vi/TdpBRZ0dZhw/maxresdefault.jpg");
  background-size: cover;
  width: 100%;
  max-width: 350px;
`;

class PopularRoutes extends Component {
  state = {
    //fetch from server
    populars: ["Мальдивы", "Канары", "Ибица", "Ебица"]
  };
  render() {
    return (
      <StyledPopularRoutes>
        {this.state.populars.map((offer, i) => (
          <StyledOffer key={offer + i}>{offer}</StyledOffer>
        ))}
      </StyledPopularRoutes>
    );
  }
}

export default PopularRoutes;
