import React from "react";
import styled from "styled-components";
import SearchForm from "../../components/Route/SearchForm";
import PopularRoutes from "../PopularRoutes";
import SlimWrapper from "../../components/General/SlimWrapper";
import SectionLabel from "../../components/General/SectionLabel";
import Button from "../../components/General/Button";
import { media, hideOn } from "../../utils/helpers";

const StyledHome = styled.div`
  /* width: 100vw; */
  background-color: #fff;
`;

const SearchWrapper = styled.div`
  padding-top: 56px;
  padding-bottom: 240px;
  position: relative;
  background-image: linear-gradient(
      to bottom,
      rgba(3, 59, 121, 0.49),
      rgba(66, 82, 100, 0.31)
    ),
    url("https://www.wallpaperup.com/uploads/wallpapers/2016/03/30/918988/d29264bc683df42ae189a351116ce0da-700.jpg");

  background-size: auto, cover;
  background-position: center;
  /* height: 630px; */
  box-sizing: border-box;
`;

const ContentWrapper = styled(SlimWrapper)`
  padding-top: 75px;
`;

const Advantages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  margin-bottom: 55px;

  ${media.medium`
    flex-direction: column;
    align-items: center;
  `}
  ${media.small`
  flex-direction: column;
    align-items: center;
  `}
`;

const Advantage = styled.div`
  display: inline-block;
  width: 248px;
  padding-bottom: 40px;
  position: relative;
  margin-bottom: 50px;
  /* ${media.small`
    width: 100%;
  `} */
`;

const AdvantagesLabel = styled.div`
  height: 3em;
  font-size: 20px;
  font-weight: 900;
`;

const AdvantageText = styled.p`
  font-weight: 300;
  /* height: 6em; */
`;

const AdvantageButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  height: 40px;
  left: 0;
  right: 0;
  ${media.medium`
   text-align: center;
  `}
  ${media.small`
  text-align: center;
  `}
`;

const MottoWrapperUp = styled.div`
  /* height: 141px; */
  margin-bottom: 70px;
  font-size: 40px;
  font-weight: 900;
  text-align: center;
  color: #ffffff;
`;

const MottoContainerDown = styled.div`
  font-size: 40px;
  font-weight: bold;
  width: 70%;
`;

const BgBorder = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  /* height: 120px; */
  /* box-sizing: border-box; */
  padding-top: 8.3%;
`;

const CurveContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  top: 0;
`;



// TODO ? search redirect or not ? if not how ?
const Home = () => {
  return (
    <StyledHome>
      <SearchWrapper>
        <SlimWrapper>
        <MottoWrapperUp>Открой мир путешествий с T-Port</MottoWrapperUp>
        <SearchForm />
        <BgBorder>
          <CurveContainer>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 Q 50 100, 67 99 T 100 0 L 100 100 L 0 100 Z"
                fill="white"
              />
            </svg>
          </CurveContainer>
        </BgBorder>
        </SlimWrapper>
      </SearchWrapper>
      <ContentWrapper>
        <Advantages>
          <Advantage>
            <AdvantagesLabel>Путешествия на любой вкус</AdvantagesLabel>
            <AdvantageText>
              Наша программа лояльности позволит Вам экономить больше половины
              от суммы заказов.
            </AdvantageText>
            <AdvantageButtonWrapper>
              <Button />
            </AdvantageButtonWrapper>
          </Advantage>
          <Advantage>
            <AdvantagesLabel>Никто кроме нас</AdvantagesLabel>
            <AdvantageText>
              T-Port - единственный сервис для планирования маршрута от двери до
              двери.
            </AdvantageText>
            <AdvantageButtonWrapper>
              <Button />
            </AdvantageButtonWrapper>
          </Advantage>
          <Advantage>
            <AdvantagesLabel>Экономьте с бонусами от T-Port</AdvantagesLabel>
            <AdvantageText>
              Наша программа лояльноти позволит вам сэкономить до 15% от суммы
              заказа.
            </AdvantageText>
            <AdvantageButtonWrapper>
              <Button value="Подробнее" />
            </AdvantageButtonWrapper>
          </Advantage>
        </Advantages>
        <PopularRoutes />
        <MottoContainerDown>
          Укажи начало и конец пути Выбери удобный маршрут Путешествуй c T-Port!
        </MottoContainerDown>
      </ContentWrapper>
    </StyledHome>
  );
};

export default Home;
