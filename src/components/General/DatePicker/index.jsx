import React, { Component } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: inline-block;
  box-sizing: border-box;
  /* width: 322px; */
  width: 100%;
  min-width: fit-content;
  padding: 9px;
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

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 50px repeat(5, auto);
  justify-items: stretch;
  align-items: stretch;
  user-select: none;
`;

const GridCell = props => (
  <CellContainer
    coord={props.coord}
    onClick={props.onClick}
    isBetween={props.isBetween}
  >
    <DateContainer isToday={props.isToday} isSelected={props.isSelected}>
      {props.children}
    </DateContainer>
  </CellContainer>
);

const CellContainer = styled.div`
  grid-column-start: ${({ coord }) => coord[1]};
  grid-column-end: ${({ coord }) => coord[1] + 1};
  grid-row-start: ${({ coord }) => coord[0]};
  grid-row-end: ${({ coord }) => coord[0] + 1};
  padding: 6.5px;
  text-align: center;
  position: relative;
  ${({ onClick }) => {
    if (onClick)
      return css`
        cursor: pointer;
      `;
  }}
  ${({ isBetween }) => {
    if (isBetween)
      return css`
        /* background-color: lightseagreen; */
        color: white;
        &::after{
          position: absolute;
          content:"";
          left: 0;
          right: 0;
          top: 30%;
          bottom: 30%;
          background-color: #fbc328;
          z-index: 1;
        }
      `;
  }}
`;

const DateContainer = styled.div`
  width: 22px;
  height: 22px;
  margin: auto;
  display: inline-block;
  border-radius: 11px;
  position: relative;
  z-index:3;
  ${props => {
    if (props.isToday) {
      return css`
        background-color: #007aff;
        color: white;
      `;
    }
  }}
  ${props => {
    if (props.isSelected) {
      return css`
        background-color: ${({ isSelected }) => {
          if (isSelected > 0) return "#fbc328";
        }};
        color: white;
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
    visiblePeriod: new Date(new Date().setDate(1)),
    firstSelected: null,
    secondSelected: null
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
    // sunday is considered the first day of the week so this offest things to normal Russian
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

    let first = this.state.firstSelected;
    let second = this.state.secondSelected;

    if (first !== null && first.getDate() === date) {
      if (second !== null) {
        first = second;
        second = null;
      } else {
        first = null;
      }
    } else if (second !== null && second.getDate() === date) {
      second = null;
    } else if (first === null && second === null) {
      first = this.getSelectedDateObj(date);
    } else if (first !== null && second === null) {
      second = this.getSelectedDateObj(date);
    }

    if (
      (second ? second.getTime() : Infinity) < (first ? first.getTime() : 0)
    ) {
      let temp = first;
      first = second;
      second = temp;
    }

    this.setState({
      firstSelected: first,
      secondSelected: second
    });
  };

  getSelectedDateObj = date => {
    return new Date(new Date(this.state.visiblePeriod).setDate(date));
  };

  getOutsideMonth = (year, month, dateObj) => {
    if (
      year < dateObj.getFullYear() ||
      (month < dateObj.getMonth() && year === dateObj.getFullYear())
    ) {
      return 32;
    } else if (
      year > dateObj.getFullYear() ||
      (month > dateObj.getMonth() && year === dateObj.getFullYear())
    ) {
      return -1;
    }
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
      year === new Date().getFullYear() &&
      monthCode === new Date().getMonth()
    ) {
      hasToday = new Date().getDate();
    }
    // console.log(hasToday);

    let firstSelected = this.state.firstSelected;
    // console.log("renser fiest selected: ", firstSelected);

    let hasFirstSelected = -1;

    if (
      firstSelected !== null &&
      year === firstSelected.getFullYear() &&
      monthCode === firstSelected.getMonth()
    ) {
      hasFirstSelected = firstSelected.getDate();
    } else if (firstSelected !== null) {
      hasFirstSelected = this.getOutsideMonth(year, monthCode, firstSelected);
    }

    let secondSelected = this.state.secondSelected;
    // console.log("renser fiest selected: ", firstSelected);

    let hasSecondSelected = -1;

    if (
      secondSelected !== null &&
      year === secondSelected.getFullYear() &&
      monthCode === secondSelected.getMonth()
    ) {
      hasSecondSelected = secondSelected.getDate();
    } else if (secondSelected !== null) {
      hasSecondSelected = this.getOutsideMonth(year, monthCode, secondSelected);
    }

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
              isSelected={
                hasFirstSelected === el + 1
                  ? 1
                  : hasSecondSelected === el + 1
                  ? 2
                  : 0
              }
              isBetween={
                el + 1 > hasFirstSelected && el + 1 < hasSecondSelected
              }
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
