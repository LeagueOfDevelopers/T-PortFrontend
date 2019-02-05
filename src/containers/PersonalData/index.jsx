import React, { Component, Fragment } from "react";
import styled from "styled-components";
import InfoLabel from "../../components/InfoLabel";
import BankCardsInfo from "../BankCardsInfo";
import SectionLable from "../../components/SectionLabel";
import PersonalDataNavImported from "../../components/DataNav";
import SlimWrapper from "../../components/SlimWrapper";
import { media, hideOn } from "../../utils/helpers";

//future redux needed

const MainWrapper = styled(SlimWrapper)`
/* add to customize */
`;

const LableWrapper = styled.div`
  padding-left: 36px;
`;

class PersonalData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 2
    };
  }

  handleLableClick = number => {
    console.log(number);
    if (this.state.selected !== number) {
      this.setState({
        selected: number
      });
    }
  };

  render() {
    let selected = this.state.selected;
    return (
      <MainWrapper>
        <PersonalDataNavImported>
          <LableWrapper>
            <SectionLable text="Ваши данные" fontWeight={600} />
          </LableWrapper>
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
        </PersonalDataNavImported>
        <Fragment>{this.state.selected === 2 && <BankCardsInfo />}</Fragment>
      </MainWrapper>
    );
  }
}

export default PersonalData;
