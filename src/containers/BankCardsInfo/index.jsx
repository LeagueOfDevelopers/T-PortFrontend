import React, { Component, Fragment } from "react";
import styled from "styled-components";
import CardForm from "../../components/Profile/InfoTemplates/BankCardTemplate";
import Button from "../../components/General/Button";
import SectionLabel from "../../components/General/SectionLabel";
import SavedCard from "../../components/Profile/SavedBankCard";
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
          <SectionLabel text="Добавить карту" />
          <CardFormWrapper>
            <CardForm id="cc-form"/>
          </CardFormWrapper>

          <ButtonWrapper>
            <Button value="Добавить" form="cc-form"/>
          </ButtonWrapper>
        </CardBlockWrapper>
        <SavedWrapper>
          <SectionLabel text="Сохраненные" />
          <SavedCard />
        </SavedWrapper>
      </Fragment>
    );
  }
}

export default BankCardsInfo;
