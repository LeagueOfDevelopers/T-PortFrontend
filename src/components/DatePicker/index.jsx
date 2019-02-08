import React, { Component } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: inline-block;
  box-sizing: border-box;
  /* width: 322px; */
  width: 100%;
  padding: 17px;
  border-radius: 11px;
  color: #7c86a2;
  background-color: white;
  font-weight: 600;
  font-size: 15px;
  box-shadow: 0 2px 4px 0 #d1d1d1;
  /* position: relative; */
`;

const Heading = styled.div`
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Switches = styled.div`
  display: inline-block;
  position: absolute;
  right: 9px;
`;

const LINE_HEIGHT = 32;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 50px repeat(5, auto);
  justify-items: stretch;
  align-items: stretch;
`;

const GridCell = props => (
  <CellContainer coord={props.coord} onClick={props.onClick}>
    <DateContainer isToday={props.isToday}>{props.children}</DateContainer>
  </CellContainer>
);

const CellContainer = styled.div` 
  grid-column-start: ${({ coord }) => coord[1]};
  grid-column-end: ${({ coord }) => coord[1] + 1};
  grid-row-start: ${({ coord }) => coord[0]};
  grid-row-end: ${({ coord }) => coord[0] + 1};
  /* width: 100%; */
  /* height: 100%; */
  /* padding: ${LINE_HEIGHT / 2 - 11 + "px"}; */
  padding: 6.5px;
  text-align: center;
  /* border-radius: 11px; */
  /* background-color: ${`hsl(${Math.floor(
    Math.random() * 360
  )}, 100%, 50%)`}; */
`;

const DateContainer = styled.div`
  width: 22px;
  height: 22px;
  margin: auto;
  display: inline-block;
  border-radius: 11px;
  ${props => {
    if (props.isToday) {
      return css`
        background-color: #fac14b;
        color: white;
        /* &::after {
          width: 22px;
          height: 22px;
          content: "";
          background-color: red;
        } */
      `;
    }
  }}
`;

const MonthsRU = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
];

class DatePicker extends Component {
  state = {
    visiblePeriod: new Date(new Date().setDate(1))
  };

  handleMonthChange = inc => {
    this.setState(prev => {
      let newDate = new Date(prev.visiblePeriod.getTime());

      newDate.setMonth(newDate.getMonth() + inc);

      console.log("newDate", newDate);

      return { visiblePeriod: newDate };
    });
  };

  getCoord = (i, offset) => {
    // sundey is considered the first day of the week so this offest things to normal Russian
    //offset because months does not always start on monday
    if (offset === 0) offset = 7;
    offset--;
    //row = index div 7
    //column = index mod 7
    //________________________________________v____this is bacuse of day letters above dates
    return [Math.ceil((i + offset + 1) / 7) + 1, ((i + offset) % 7) + 1];
  };

  handleDateClick = date => {
    console.log(date);
  };

  render() {
    let visiblePeriod = this.state.visiblePeriod;
    console.log("visiblePeriod", visiblePeriod);

    let monthCode = visiblePeriod.getMonth();
    let month = MonthsRU[monthCode];
    let year = visiblePeriod.getFullYear();
    let daysNum = new Date(
      visiblePeriod.getFullYear(),
      visiblePeriod.getMonth() + 1,
      0
    ).getDate();
    let firstDay = visiblePeriod.getDay();
    // [...Array(daysNum).keys()].map((el) => console.log(el));
    let hasToday = false;
    if (
      year == new Date().getFullYear() &&
      monthCode == new Date().getMonth()
    ) {
      hasToday = new Date().getDate();
    }
    console.log(hasToday);

    return (
      <Container>
        <Heading>
          <span>
            {month}, {year}
          </span>
          <Switches>
            <img
              src="assets/DateSwitchLeft.png"
              alt="<"
              width="22px"
              heigth="22px"
              onClick={this.handleMonthChange.bind(null, -1)}
              style={{ cursor: "pointer" }}
            />
            {"  "}
            <img
              src="assets/DateSwitchRight.png"
              alt=">"
              width="22px"
              heigth="22px"
              onClick={this.handleMonthChange.bind(null, 1)}
              style={{ cursor: "pointer" }}
            />
          </Switches>
        </Heading>
        <GridWrapper>
          {"П В С Ч П С В".split(" ").map((c, i) => (
            <GridCell coord={[1, i + 1]} key={c + i}>
              {c}
            </GridCell>
          ))}

          {[...Array(daysNum).keys()].map(el => (
            <GridCell
              coord={this.getCoord(el, firstDay)}
              key={el + " date"}
              isToday={hasToday === el + 1}
              onClick={this.handleDateClick.bind(null, el + 1)}
            >
              {el + 1}
            </GridCell>
          ))}
        </GridWrapper>
      </Container>
    );
  }
}

export default DatePicker;
