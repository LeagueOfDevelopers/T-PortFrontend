import React, { Component, Fragment } from "react";
import styled from "styled-components";
import PopularCard from "../../components/Route/PopularCard";
import Button from "../../components/General/Button";
import { media } from "../../utils/helpers";

const Popular = styled.div``;

const RoutesContainer = styled.div`
  padding: 0;
  position: relative;
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center; */
  max-width: 1350px;
  margin: 0 auto;
`;

const PopularName = styled.div`
  /* font-family: LucidaGrande; */
  font-size: 40px;
  font-weight: bold;
  letter-spacing: -0.1px;
  margin-bottom: 30px;
  /* text-align: center; */
  /* color: #000000; */
`;

const WrapperBlock = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 200px);
  gap: 30px 30px;
  justify-items: stretch;
  align-items: stretch;
  ${media.small`
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 200px);
    gap: 15px 15px;
  `}
`;

const HotCard = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 3;
`;

const NewCard = styled.div`
  /* grid-column: 1 / 3;
  grid-row: 1 / 3; */
`;

const Fading = styled.div`
  position: absolute;
  bottom: 100%;
  left: -2px;
  right: -2px;
  height: 200px;
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  /* background-color: greenyellow; */
  /* margin-bottom: -200px; */
`;

const SeeMoreText = styled.div`
  margin: auto;
  /* margin-top: -50%; */
  width: fit-content;
  font-weight: 800;
  text-align: center;
  position: relative;
  top: -76%;
  /* height: 100px; */
`;

const ST = styled.span`
  font-weight: ${props => props.w};
  font-size: ${props => props.s};
  height: ${props => props.h || "auto"};
`;

const PopularFooter = styled.div`
  width: 100%;
  height: 148px;
  /* background-color: red; */
  position: relative;
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
          {/* {this.state.populars.map((offer, i) => (
            <PopularCard key={offer + i}>{offer}</PopularCard>
          ))} */}
          <WrapperBlock>
            <HotCard>
              <PopularCard>HI</PopularCard>
            </HotCard>
            <NewCard>
              <PopularCard>HI</PopularCard>
            </NewCard>
            <NewCard>
              <PopularCard>HI</PopularCard>
            </NewCard>
          </WrapperBlock>
        </RoutesContainer>
        <PopularFooter>
          <Fading />
          <SeeMoreText>
            <ST w="800" s="144px" h="108px">
              0
              <ST w="600" s="144px">
                <sup>+</sup>
              </ST>
            </ST>
            <br/>
            <ST>предложений</ST>
            <br/>
            <Button value="Смотреть"/>
          </SeeMoreText>
        </PopularFooter>
      </Popular>
    );
  }
}

export default PopularRoutes;
