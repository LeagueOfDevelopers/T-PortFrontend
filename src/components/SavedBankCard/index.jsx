import React from "react";
import styled from "styled-components";

const Saved = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  padding-left:14px;
  padding-top:40px;
  padding-bottom:8px;
  /* height: 153px; */
  background-color: yellowgreen;
    border-radius: 8px;
  font-size: 8px;
  font-weight: bold;
  letter-spacing: -0.1px;
  color: #ffffff;
`;

const SavedBankCard = () => {
  return (
    <Saved>
      <div>
        <div>Номер карты</div>
        <div>**** **** **** 1234</div>
      </div>
      <br/>
      <div>
        <div>Срок действия</div>
        <div>08/23</div>
      </div>
    </Saved>
  );
};

export default SavedBankCard;
