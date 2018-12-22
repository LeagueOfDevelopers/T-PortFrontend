import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  position: relative;
  width: 388px;
  height: 270px;
  margin: 0 32px;
  margin-bottom: 26px;
  /* background-color: red; */
  border-radius: 10px;
  box-shadow: 0 2px 6px 0 rgba(152, 148, 148, 0.45);
`;

const Thumbnail = styled.div`
  height: 209px;
  background-image: url("https://i.ytimg.com/vi/TdpBRZ0dZhw/maxresdefault.jpg");
  background-size: cover;
  border-radius: 10px 10px 0 0;
`;

const CardInfo = styled.div`
  position: absolute;
  width: 100%;
  height: 59px;
  background-color: white;
  bottom: 0;
  border-radius: 0 0 10px 10px;
`;

const PopularCard = () => {
  return (
    <StyledCard>
      <Thumbnail>IMG</Thumbnail>
      <CardInfo>NAME</CardInfo>
    </StyledCard>
  );
};

export default PopularCard;
