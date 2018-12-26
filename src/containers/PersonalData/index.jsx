import React, { Component, Fragment } from "react";
import styled from "styled-components";
import InfoLabel from "../../components/InfoLabel";
import BankCardsInfo from "../BankCardsInfo";

//future redux needed

const PersonalDataPanel = styled.nav`
  display: inline-block;
  width: 313px;
  text-align:start;
  padding-left: 25px;
  padding-right: 50px;
`;

class PersonalData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 2
    };
  }

  handleLableClick = (event) => {
    console.log(event.target.name,
      event.target.id)
  }

  render() {
    return (
      <Fragment>
        <PersonalDataPanel>
          <span>Ваши данные</span>
          <InfoLabel text="Паспортные данные" onClick={this.handleLableClick} selected = {this.state.selected === 1 }/>
          <InfoLabel text="Платежные карты" onClick={this.handleLableClick}  selected = {this.state.selected === 2 }/>
          <InfoLabel text="Контактные данные" onClick={this.handleLableClick}  selected = {this.state.selected === 3}/>
        </PersonalDataPanel>
        {this.state.selected === 2 && <BankCardsInfo />}
      </Fragment>
    );
  }
}

export default PersonalData;
