import React, { Component, Fragment } from "react";
import styled from "styled-components";
import InfoLabel from "../../components/InfoLabel";
import BankCardsInfo from "../BankCardsInfo";
import PassportInfo from "../PassportInfo";
import ContactInfo from "../ContactInfo";
import SectionLable from "../../components/SectionLabel";
import DataTypeSelector from "../../components/DataNav";
import SlimWrapper from "../../components/SlimWrapper";
import { media, hideOn } from "../../utils/helpers";

//future redux needed

const MainWrapper = styled(SlimWrapper)`
  /* add to customize */
`;

const DataTypeWrapper = styled.div`
  box-sizing: border-box;
  display: inline-block;
  width: 30%
  ${media.large`
    width: 30%
  `}
  /* ${media.medium`
    width: 50%
    padding-right: 15px;
    margin-bottom: 30px;
  `} */
  ${media.small`
    width: 100%
  `}
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
        <DataTypeWrapper>
          <DataTypeSelector>
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
          </DataTypeSelector>
        </DataTypeWrapper>
        <Fragment>{this.state.selected === 2 && <BankCardsInfo />}</Fragment>
        {this.state.selected === 1 && <PassportInfo />}
        {this.state.selected === 3 && <ContactInfo />}
      </MainWrapper>
    );
  }
}

export default PersonalData;
