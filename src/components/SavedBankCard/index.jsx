import React from "react";
import styled from "styled-components";

const Saved = styled.div`
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 24px 16px;
  margin-bottom: 15px;

  background-color: white;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.06px;
  box-shadow: 0 2px 4px 0 rgba(189, 184, 184, 0.45);
`;

const ImgWrapper = styled.div`
  display: inline-block;
  height: 100%;
  margin-right: 16px;
`;

const InfoWrapper = styled.div`
  display: inline-block;
`;

const Cardholder = styled.div`
  color: #9b9b9b;
  font-weight: 400;
  text-transform: uppercase;
`;

const DeleteWrapper = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: transparent;
  top:5px;
  right: 5px;
  cursor: pointer;
`;

const SavedBankCard = () => {
  return (
    <Saved>
      <ImgWrapper>
        <img src="assets/visa-logo.png" alt="" width="63px" />
      </ImgWrapper>

      <InfoWrapper>
        <div>
          <span>Сбербанк</span> {'  '}
          <span>•••• 1234</span>
        </div>
        <Cardholder>Mr. Cardholder</Cardholder>
      </InfoWrapper>
      <DeleteWrapper>
        <img src="assets/CrossGrey.png" alt="" width="16px"/>
      </DeleteWrapper>
    </Saved>
  );
};

export default SavedBankCard;
