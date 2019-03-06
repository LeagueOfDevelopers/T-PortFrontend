import React, { Component, Fragment } from "react";
import styled, { css } from "styled-components";
import Button from "../../General/Button";
import { media } from "../../../utils/helpers";
import * as NAMES from "../../../utils/imagesSrc";

const Card = styled.div`
  width: 100%;
  min-height: 143px;
  background-color: transparent;
  font-size: 15px;
  display: flex;
  /* flex-wrap: nowrap; */
  flex-wrap: wrap;
  align-items: stretch;
`;

const TicketPart = styled.div`
  display: inline-block;
  box-sizing: border-box;
  /* height: 100%; */
  padding: ${({ folded }) => (folded ? "0 10px" : "0")};

  background-color: white;
  border-radius: 8px;
  vertical-align: top;
  position: relative;
  /* z-index: 2; */
  &::after {
    position: absolute;
    content: "";
    border-radius: inherit;
    box-shadow: 0 2px 7px 0 #dbdddd;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;

const RouteBlock = styled(TicketPart)`
  /* width: 77%; */
  width: ${({ folded }) => (folded ? "77%" : "100%")};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
  ${({ folded }) =>
    folded
      ? ""
      : css`
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        `}
`;

//help me i fucking hate it
const RouteWrapper = styled.div`
  position: relative;
`;

const RouteBlockScrollContainer = styled.div`
  overflow-x: scroll;
  /* height: 100%; */
  /* padding-bottom: 10px; */
  position: relative;

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 4px;
    height: 1px;
  }
  &:hover::-webkit-scrollbar-thumb {
    background-color: #007aff;
  }

  &::-webkit-scrollbar {
    width: 100%;
    height: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: red;
  }
`;

const Fading = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 4px;
  &::before {
    position: absolute;
    content: "";
    /* top: 20px; */
    display: inline-block;
    height: 100%;
    width: 20px;
    /* consider parent padding */
    left: 0;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );

    /* transports are on 50th */
    z-index: 60;
    &::before {
      content: "hui";
    }
  }
  &::after {
    position: absolute;
    content: "";
    /* top: 20px; */
    display: inline-block;
    height: 100%;
    width: 20px;
    /* consider parent padding */
    right: 0;
    background-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    /* transports are on 50th */
    z-index: 60;
  }
`;

const SPACE_AROUND_THRESHOLD = 3;

const RouteBlockContents = styled.div`
  display: flex;
  position: relative;
  /* justify-content: space-between; */
  justify-content: ${({ num }) =>
    num < SPACE_AROUND_THRESHOLD ? "space-around" : "space-between"};
  min-width: 100%;
  width: ${props => props.num * (55 + 55) + "px"};
`;

const PriceBlock = styled(TicketPart)`
  width: ${({ folded }) => (folded ? "23%" : "100%")};
  /* padding-top: ${({ folded }) => (folded ? "25px" : "18px")};
  padding-bottom: ${({ folded }) => (folded ? "0" : "18px")};
  padding-left: ${({ folded }) => (folded ? "" : "18px")}; */
  padding: ${({ folded }) =>
    folded ? "25px 10px 0 10px" : "18px 20px 18px 75px"};
  /* width: 23%; */
  text-align: center;
  /* padding-top: 25px; */
  ${({ folded }) =>
    folded
      ? ""
      : css`
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
`;

const Dots = styled.div`
  display: ${({ folded }) => (folded ? "block" : "none")};

  position: absolute;
  box-sizing: border-box;
  /* height: 127px; */
  left: -2px;
  top: 8px;
  bottom: 8px;

  background-color: white;
  border-left-width: 4px;
  border-left-style: dotted;
  border-color: #f1f3f4;
`;

const Price = styled.div`
  color: #f2801e;
  margin-top: 4px;
  margin-bottom: 13px;
`;

const LINE_HEIGHT = 6; //px
const LINE_COLOR = "#cfd3dd";
const TOP = 0; //px
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
  height: ${LINE_HEIGHT + "px"};
  left: ${({ num }) => {
    if (num < SPACE_AROUND_THRESHOLD) return 50 / num + "%";
    return "26px";
  }};
  right: ${({ num }) => {
    if (num < SPACE_AROUND_THRESHOLD) return 50 / num + "%";
    return "26px";
  }};
  top: ${ICON_SIDE / 2 - LINE_HEIGHT / 2 + "px"};
  background-color: ${LINE_COLOR};
  z-index: 40;
`;

const Rounding = styled.div`
  position: absolute;
  height: ${LINE_HEIGHT + "px"};
  width: ${LINE_HEIGHT + "px"};
  border-radius: ${LINE_HEIGHT * 0.5 + "px"};
  background-color: ${LINE_COLOR};
  top: ${ICON_SIDE / 2 - LINE_HEIGHT / 2 + "px"};
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

const ArrivalLabel = styled.label`
  color: #797a79;
`;

const StyledArrivalTime = styled.span`
  color: #000;
  font-weight: 600;
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

const getSideRoundings = (len, i) => {
  if (1 === len) return "both";
  else if (i === 0) return "left";
  else if (i + 1 === len) return "right";
  else return "";
};

const getIconPath = TransportType => {
  switch (TransportType) {
    case "taxi":
      return NAMES.CAR_BLUE;
    case "plane":
      return NAMES.PLANE_BLUE;
    case "train":
      return NAMES.TRAIN_BLUE;
    default:
      break;
  }
};

const SubPoints = styled.div`
  /* margin-top: 0; */
  padding-left: 32px;
  /* list-style: none; */
  /* color: red; */
  position: relative;
`;

const SubPoint = styled.div`
  /* &::before {
    content: "\\2022";
    color: red;
    font-weight: bold;
  } */
`;

const SubPointsLine = styled.div`
  /* display: inline-block; */
  background-color: blanchedalmond;
  /* height: 100%; */
  position: absolute;
  width: 7px;
  top: 0;
  bottom: 0;
  left: 0;
`;

const Unfold = styled.div`
  position: absolute;
  /* height: 20px; */
  bottom: 0;
  left: 0;
  right: 0;
  /* margin: auto; */
`;

const UnfoldImg = styled.img`
  display: block;
  margin: 9px auto;
  cursor: pointer;
`;

const VerticalWrapper = styled.div`
  padding: 18px 0;
  box-sizing: border-box;
  min-height: 80px;
  position: relative;
  display: flex;
  align-items: stretch;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 1px;
    right: 0px;
    left: 80px;
    background-color: #f1f3f4;
  }
`;

const VerticalIconSpace = styled.div`
  /* display: inline-block; */
  width: 80px;
  /* position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 60px; */
  background: url(${({ src }) => src}) center center no-repeat;
  background-size: 25px;
`;

const VerticalIcon = styled.img`
  display: block;
  margin: auto;
`;

const VerticalElementInfo = props => (
  <VerticalITransportInfo>
    <div style={{ fontSize: "15px" }}>{props.title}</div>
    <div style={{ fontSize: "12px", color: "#797a79" }}>{props.cost}</div>
  </VerticalITransportInfo>
);

const ArrivalTimeBlock = styled.div`
  display: ${({ folded }) => (folded ? "block" : "none")};
`;

const VerticalITransportInfo = styled.div``;

const VerticalLines = ({ noSides }) => {
  return (
    <Fragment>
      {noSides !== "left" && noSides !== "both" && <VerticalLine left />}
      {noSides !== "right" && noSides !== "both" && <VerticalLine right />}
    </Fragment>
  );
};

const VerticalLine = styled.div`
  position: absolute;
  left: 39px;
  width: 4px;
  bottom: ${props => (props.left ? "80%" : "0")};
  top: ${props => (props.left ? "0" : "80%")};
  background-color: #cfd3dd;
  border-radius: ${props => props.left ? "0 0 5px 5px" : "5px 5px 0 0"};
`;

class RouteCard extends Component {
  state = {
    folded: true
  };

  handleFolding = () => {
    this.setState({ folded: !this.state.folded });
  };

  render() {
    let folded = this.state.folded;
    let subroutes = this.props.route.subRoutes;
    let totalCost = this.props.route.totalCost;
    let arrivalTime = this.props.route.arrivalTime;
    let Ftime =
      new Date(arrivalTime).getHours() +
      ":" +
      (new Date(arrivalTime).getMinutes().toString().length < 2
        ? "0" + new Date(arrivalTime).getMinutes().toString()
        : new Date(arrivalTime).getMinutes());
    console.log(this.props, subroutes, totalCost, arrivalTime);
    console.log(new Date(arrivalTime).getMinutes().toString().length);

    return (
      <Card>
        <RouteBlock folded={folded}>
          {!this.props.noPoints && (
            <SubPoints>
              <SubPointsLine />
              <SubPoint>{this.props.route.points.departure}</SubPoint>
              <SubPoint>{this.props.route.points.destination}</SubPoint>
            </SubPoints>
          )}
          <RouteWrapper>
            {folded && (
              <Fragment>
                <Fading />
                <RouteBlockScrollContainer>
                  <RouteBlockContents num={subroutes.length}>
                    {subroutes.length > 1 && <Line num={subroutes.length} />}
                    {subroutes.map((el, i) => (
                      <TransportWrapper key={"transport" + i}>
                        <Roundings
                          noSides={getSideRoundings(subroutes.length, i)}
                        />
                        <TransportIcon>
                          <img
                            src={getIconPath(el.type)}
                            alt={el.type}
                            width="22px"
                            height="22px"
                          />
                        </TransportIcon>
                        <TransportInfo title={el.title} cost={el.cost} />
                      </TransportWrapper>
                    ))}
                  </RouteBlockContents>
                </RouteBlockScrollContainer>
              </Fragment>
            )}
            {!folded && (
              <Fragment>
                {subroutes.map((el, i) => (
                  <Fragment>
                    {i !== 0 && (
                      <VerticalWrapper>
                        <VerticalLines />
                      </VerticalWrapper>
                    )}
                    <VerticalWrapper key={"transport" + i}>
                      <VerticalLines
                      // noSides={getSideRoundings(subroutes.length, i)}
                      />
                      <VerticalIconSpace src={getIconPath(el.type)}>
                        {/* <VerticalIcon
                          src={getIconPath(el.type)}
                          alt={el.type}
                          width="22px"
                          height="22px"
                        /> */}
                      </VerticalIconSpace>
                      <VerticalElementInfo title={el.title} cost={el.cost} />
                    </VerticalWrapper>
                  </Fragment>
                ))}
              </Fragment>
            )}
          </RouteWrapper>
          {folded && (
            <Unfold>
              <UnfoldImg
                src="assets/RouteCardUnfold.png"
                alt="Показать"
                width="18px"
                onClick={this.handleFolding}
              />
            </Unfold>
          )}
        </RouteBlock>
        <PriceBlock folded={folded}>
          <Dots folded={folded} />
          <ArrivalTimeBlock folded={folded}>
            <ArrivalLabel>Прибытие:</ArrivalLabel>{" "}
            <StyledArrivalTime>{Ftime}</StyledArrivalTime>
          </ArrivalTimeBlock>
          <Price>
            ≈<strong>{totalCost}</strong> ₽
          </Price>
          {!this.props.paid && <Button value="Купить" />}
          {this.props.paid && <Price>Оплачено</Price>}
          {!folded && (
            <Unfold>
              <UnfoldImg
                src="assets/RouteCardFold.png"
                alt="Показать"
                width="18px"
                onClick={this.handleFolding}
              />
            </Unfold>
          )}
        </PriceBlock>
      </Card>
    );
  }
}

export default RouteCard;
