import React, { Component, Fragment } from "react";
import styled from "styled-components";
import CardForm from "../../components/BankCardTemplate";
import Button from "../../components/Button";
import SectionLable from "../../components/SectionLabel";
import SavedCard from "../../components/SavedBankCard";
import { media, hideOn } from "../../utils/helpers";

const StyledCardsInfo = styled.div`
  display: inline-block;
  text-align: start;
  padding: 0 20px;
  /* vertical-align: top; */
`;

const CardBlockWrapper = styled.div`
  display: inline-block;
  /* margin: 0 20px; */
  box-sizing: border-box;
  vertical-align: top;
  width: 70%;
  padding: 0 30px;
  ${media.small`
    width: 100%;
`}
`;

const CardFormWrapper = styled.div`
  /* margin: 0 0; */
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  float: right;
`;

const SavedWrapper = styled.div`
  display: inline-block;
  /* margin-right: 35px; */
  vertical-align: top;
  /* margin: 0 20px; */
  box-sizing: border-box;
  width: 30%;
  ${media.small`
    width: 100%;
`} /* padding: 0 20px; */
`;

class BankCardsInfo extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <CardBlockWrapper>
          <SectionLable text="Добавить карту" />
          <CardFormWrapper>
            <CardForm />
          </CardFormWrapper>

          <ButtonWrapper>
            <Button value="Добавить" />
          </ButtonWrapper>
        </CardBlockWrapper>
        <SavedWrapper>
          <SectionLable text="Сохраненные" />
          <SavedCard />
        </SavedWrapper>
      </Fragment>
    );
  }
}

export default BankCardsInfo;
