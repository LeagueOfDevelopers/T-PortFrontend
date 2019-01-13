import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Button from "../Button";
import { media } from "../../utils/helpers";
import * as NAMES from "../../utils/imagesSrc";

const Card = styled.div`
  width: 100%;
  height: 143px;
  background-color: transparent;
`;

const TicketPart = styled.div`
  display: inline-block;
  box-sizing: border-box;
  height: 143px;
  padding: 0px 10px;

  background-color: white;
  border-radius: 8px;
  vertical-align: top;
  position: relative;
  /* z-index: 2; */
  &::after {
    position: absolute;
    content: "";
    border-radius: inherit;
    box-shadow: 0 2px 7px 0 rgba(63, 63, 63, 0.5);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;

const RouteBlock = styled(TicketPart)`
  width: 77%;
  display: inline-flex;
  justify-content: space-between;
  /* ${media.small`
      display: flex;
  `} */
`;

const PriceBlock = styled(TicketPart)`
  width: 23%;
  text-align: center;
  padding-top: 25px;
`;

const Dots = styled.div`
  position: absolute;
  box-sizing: border-box;
  height: 127px;
  left: -2px;
  top: 8px;

  background-color: white;
  border-left-width: 4px;
  border-left-style: dotted;
  border-color: #f1f3f4;
`;

const Price = styled.div`
  color: #f2801e;
  font-weight: bold;
  margin-top: 4px;
  margin-bottom: 13px;
`;

const LINE_HEIGHT = 6; //px
const LINE_COLOR = "#cfd3dd";
const TOP = 50; //px
const ICON_SIDE = 22;

const TransportWrapper = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 55px;
  padding-top: ${TOP + LINE_HEIGHT * 0.5 - ICON_SIDE * 0.5 + "px"};
  background-color: white;
  text-align: center;
  position: relative;
  z-index: 50;
`;

const Line = styled.div`
  position: absolute;
  height: ${LINE_HEIGHT}px;
  left: 13px;
  right: 13px;
  top: ${TOP + "px"};
  background-color: ${LINE_COLOR};
  z-index: 40;
`;

const Rounding = styled.div`
  position: absolute;
  height: ${LINE_HEIGHT + "px"};
  width: ${LINE_HEIGHT + "px"};
  border-radius: ${LINE_HEIGHT * 0.5 + "px"};
  background-color: ${LINE_COLOR};
  top: ${TOP + "px"};
  ${props =>
    props.left
      ? "left: " + String(-LINE_HEIGHT * 0.5) + "px;"
      : "right: " + String(-LINE_HEIGHT * 0.5) + "px;"}
`;

const Roundings = ({ noSides }) => {
  return (
    <Fragment>
      {noSides !== "left" && noSides !== "both" && <Rounding left />}
      {noSides !== "right" && noSides !== "both" && <Rounding right />}
    </Fragment>
  );
};

const TransportIcon = styled.div`
  width: ${ICON_SIDE + "px"};
  height: ${ICON_SIDE + "px"};
  /* background-color: #007aff; */
  margin: auto;
`;

const TransportCost = styled.div`
  font-size: 12px;
  color: #797a79;
`;

const TransportTitle = styled.div`
  display: inline-block;
  font-size: 15px;
  right: 50%;
  position: relative;
`;

const TransportCenterWrapper = styled.div`
  width: fit-content;
`;

const TransportMiddle = styled.div`
  width: 0;
  margin: auto;
`;

const TransportInfo = props => (
  <Fragment>
    <TransportMiddle>
      <TransportCenterWrapper>
        <TransportTitle>{props.title}</TransportTitle>
      </TransportCenterWrapper>
    </TransportMiddle>
    <TransportCost>{props.cost}</TransportCost>
  </Fragment>
);

class RouteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card>
        <RouteBlock>
          {this.props.route.length > 1 && <Line />}
          {this.props.route.map((el, i) => (
            <TransportWrapper>
              <Roundings
                noSides={(() => {
                  if (1 === this.props.route.length) return "both";
                  else if (i === 0) return "left";
                  else if (i + 1 === this.props.route.length) return "right";
                  else return "";
                })()}
              />
              <TransportIcon>
                <img
                  src={(() => {
                    switch (el.type) {
                      case "taxi":
                        return NAMES.CAR_BLUE;
                      case "plane":
                        return NAMES.PLANE_BLUE;
                      case "train":
                        return NAMES.TRAIN_BLUE;
                      default:
                        break;
                    }
                  })()}
                  alt={el.type}
                  width="22px"
                  height="22px"
                />
              </TransportIcon>
              <TransportInfo title={el.title} cost={el.cost} />
            </TransportWrapper>
          ))}
        </RouteBlock>
        <PriceBlock>
          <Dots />
          <div>
            <label>Прибытие</label> {this.props.arrival}
          </div>
          <Price>≈{this.props.cost}</Price>
          {!this.props.paid && <Button value="Купить" />}
          {this.props.paid && <Price>Оплачено</Price>}
        </PriceBlock>
      </Card>
    );
  }
}

export default RouteCard;
