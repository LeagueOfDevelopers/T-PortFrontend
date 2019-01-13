import React, { Component, Fragment } from "react";
import styled from "styled-components";
import InfoLabel from "../../components/InfoLabel";
import BankCardsInfo from "../BankCardsInfo";
import SectionLable from "../../components/SectionLabel";

//future redux needed

const MainWrapper = styled.div`
  max-width: 950px;
  height: 100%;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(189, 184, 184, 0.5);
  min-height: calc(100vh - 66px);

  padding-top: 60px;
`;

const PersonalDataNav = styled.div`
  display: inline-block;
  text-align: start;
  box-sizing: border-box;
  width: 30%;
  padding-left: 25px;
  padding-right: 46px;
  vertical-align: top;
  /* margin-top: 60px; */
`;

const PersonalDataContents = styled.div`
  /* width: 629px; */
  display: inline-block;
  width: 70%;
  box-sizing: border-box;
  vertical-align: top;
`;

class PersonalData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 2
    };
  }

  handleLableClick = event => {
    console.log(event);
    if (this.state.selected !== event) {
      this.setState({
        selected: event
      });
    }
  };

  render() {
    let selected = this.state.selected;
    return (
      <MainWrapper>
        <PersonalDataNav>
          <SectionLable text="Ваши данные"/>
          <InfoLabel
            text="Паспортные данные"
            onClick={this.handleLableClick.bind(null, 1)}
            selected={selected === 1}
          />
          <InfoLabel
            text="Платежные карты"
            onClick={this.handleLableClick.bind(null, 2)}
            selected={selected === 2}
          />
          <InfoLabel
            text="Контактные данные"
            onClick={this.handleLableClick.bind(null, 3)}
            selected={selected === 3}
          />
        </PersonalDataNav>
        <PersonalDataContents>
        {this.state.selected === 2 && <BankCardsInfo />}
        </PersonalDataContents>
      </MainWrapper>
    );
  }
}

export default PersonalData;
