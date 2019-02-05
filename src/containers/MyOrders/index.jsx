import React, { Component, Fragment } from "react";
import styled from "styled-components";
import RouteCard from "../../components/VariantCard";
import SectionLable from "../../components/SectionLabel";
import PersonalDataNavImported from "../../components/DataNav";
import InfoLabel from "../../components/InfoLabel";
import SlimWrapper from "../../components/SlimWrapper";

const StyledMyOrders = styled(SlimWrapper)`
  /* add to customize */
`;

const LableWrapper = styled.div`
  padding-left: 36px;
`;

const OrdersContainer = styled.div`
  display: inline-block;
  box-sizing: border-box;
  padding-left: 30px;
  width: 70%;
  z-index: 50;
`;

const route1 = {
  subRoutes: [
    { type: "taxi", title: "uber", cost: "399$" },
    { type: "plane", title: "Аэрофлот", cost: "399$" },
    { type: "train", title: "Аэроэкспресс", cost: "399$" },
    { type: "train", title: "РЖД", cost: "500$" },
    { type: "taxi", title: "hui", cost: "399$" }
  ],
  totalCost: 399 * 4,
  arrivalTime: Date.now() + 1000 * 60 * 60 * 24 * 2,
  points: {
    departure: "LA Bitches",
    destination: "Mother RUSSIA"
  }
};
const route2 = {
  subRoutes: [
    { type: "taxi", title: "uber", cost: "122$" },
    { type: "train", title: "Аэроэкспресс", cost: "12$" },
    { type: "plane", title: "S7", cost: "172$" },
    { type: "taxi", title: "hui", cost: "999$" }
  ],
  totalCost: 122 + 12 + 999,
  arrivalTime: Date.now() + 1000 * 60 * 60 * 24 * 1,
  points: {
    departure: "LA Bitches",
    destination: "Mother RUSSIA"
  }
};
const route3 = {
  subRoutes: [
    { type: "taxi", title: "uber", cost: "10$" },
    { type: "plane", title: "Аэрофлот", cost: "599$" },
    { type: "taxi", title: "hui", cost: "10$" }
  ],
  totalCost: 10 + 599 + 10,
  arrivalTime: Date.now() + 1000 * 60 * 60 * 24 * 1.5 - 1000 * 60 * 10,
  points: {
    departure: "LA Bitches",
    destination: "Mother RUSSIA"
  }
};

class MyOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 2
    };
  }
  state = { orders: ["заказ 1", "заказ 2", "заказ 3", "заказ 4"] };

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
      <StyledMyOrders>
        <PersonalDataNavImported>
          <LableWrapper>
            <SectionLable text="Ваши заказы" fontWeight={600} />
          </LableWrapper>
          <InfoLabel
            text="Текущие"
            onClick={this.handleLableClick.bind(null, 1)}
            selected={selected === 1}
          />
          <InfoLabel
            text="Предстоящие"
            onClick={this.handleLableClick.bind(null, 2)}
            selected={selected === 2}
          />
          <InfoLabel
            text="История"
            onClick={this.handleLableClick.bind(null, 3)}
            selected={selected === 3}
          />
        </PersonalDataNavImported>
        <OrdersContainer>
          <Fragment>
            {this.state.selected === 1 && <RouteCard route={route1} paid />}
          </Fragment>
          <Fragment>
            {this.state.selected === 2 && <RouteCard route={route2} paid />}
          </Fragment>
          <Fragment>
            {this.state.selected === 3 && <RouteCard route={route3} paid />}
          </Fragment>
        </OrdersContainer>
      </StyledMyOrders>
    );
  }
}

export default MyOrders;
