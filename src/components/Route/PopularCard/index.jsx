import React from "react";
import styled, { css } from "styled-components";

const StyledCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* margin: 0 16px; */
  /* margin-bottom: 26px; */
  /* background-color: red; */
  border-radius: 10px;
  /* box-shadow: 0 2px 6px 0 rgba(152, 148, 148, 0.45); */
`;

const Thumbnail = styled.div`
  height: 100%;
  background-image: url("https://i.ytimg.com/vi/TdpBRZ0dZhw/maxresdefault.jpg");
  background-size: cover;
  border-radius: 10px;
`;

const CardInfo = styled.div`
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  padding: 20px 30px 10px 30px;
  width: 100%;

  border-radius: inherit;
  border-radius: inherit;
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.4) 80%,
    rgba(0, 0, 0, 0) 100%
  );
  color: white;
`;

const Note = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  border-radius: 11px;

  font-size: 15px;
  letter-spacing: -0.1px;
  padding: 6px 7px;

  background-color: lightblue;
  background-image: ${props =>
    props.type === "hot"
      ? "linear-gradient(123deg, #fad961, #f9b84c 29%, #f76b1c"
      : "linear-gradient(125deg, #22e9ef, #007aff)"};
  color: white;
`;

const Views = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
  color: white;
  font-size: 12px;
  font-weight: 600;
`;

const ViewsIcon = styled.img`

  height: 9px;
`;

const PopularCard = () => {
  return (
    <StyledCard>
      <Thumbnail />
      <Note>HOT</Note>
      <CardInfo>
        <strong>Санкт-Петербург - Москва</strong>
        <br />
        <span>РЖД</span>
      </CardInfo>
      <Views>
       <span>123</span>{"    "}
        <ViewsIcon src="assets/ViewEye.png" />
      </Views>
    </StyledCard>
  );
};

export default PopularCard;
