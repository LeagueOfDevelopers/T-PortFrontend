import React, { Component, Fragment } from "react";
import styled from "styled-components";
import SearchForm from "../../components/SearchForm";
import RouteFilterOption from "../../components/RouteFilterOption";
import VariantCard from "../../components/VariantCard";
import { media } from "../../utils/helpers";

const StyledRouteSearch = styled.main`
  /* > input {
    display: inline-block;
    width: 200px;
  } */
`;

const SearchFormBg = styled.div`
  width: 100vw;
  background-color: transparent;
  /* background-color: #033b79; */
  padding: 20px 0;
`;

const SearchResults = styled.div`
  max-width: 950px;
  margin: 0 auto;
  height: max-content;
  text-align: start;
  ${media.medium`
    margin: 0 30px;
  `}
  ${media.small`
    margin: 0 5px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: stretch;
  `}
`;

const VerticalWrapper = styled.div`
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
`;

const SearchPanelWrapper = styled(VerticalWrapper)`
  width: 30%;
  /* padding: 10px 30px; */
  padding: 0px 30px;
  padding-bottom: 15px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(173, 172, 172, 0.5);
  ${media.small`
    width:100%;
    order:1;
  `}
  ${media.medium`
    padding-right: 15px;
    padding-left: 15px;`}
`;

const SearchVariantsWrapper = styled(VerticalWrapper)`
  width: 70%;
  padding-right: 25px;
  ${media.small`
    order:2
    width: 100%;
    padding-right:0;
  `}
  ${media.medium`
    padding-right: 8px;
  `}
`;

const VariantsAmmount = styled.span`
  text-align: left;
`;

const SortOptions = styled.span`
  float: right;
  text-align: right;
`;

const Vriants = styled.div`
  position: relative;
  z-index: 50;
`;

class RouteSearch extends Component {
  state = {
    routes: []
  };

  searchHandler = e => {
    e.preventDefault();
    for (let i of e.target) {
      console.log(i);
    }

    let info = {
      departureCityName: e.target[0].value,
      destinationCityName: e.target[1].value,
      departDate: e.target[2].value || new Date().toISOString()
    };
    console.log(info);

    fetch("http://tport-test.lod-misis.ru/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        // "Accept" : "application/json"
      },
      credentials: "omit",
      mode: "cors",
      body: JSON.stringify(info)
    })
      .then(res => {
        console.log("fetched");
        this.setState({
          routes: res
        });
      })
      .catch(er => {
        console.log("er");
      });
  };

  render() {
    return (
      <Fragment>
        <SearchFormBg>
          <SearchForm onSubmit={this.searchHandler.bind(this)} />
        </SearchFormBg>
        <SearchResults>
          <SearchVariantsWrapper>
            <div>
              <VariantsAmmount>666 вариантов</VariantsAmmount>
              <SortOptions>
                Сортировать по: <span>хую</span>
              </SortOptions>
            </div>
            <Vriants>
              <VariantCard arrival="ddD" cost="999$" route={route} />
            </Vriants>
          </SearchVariantsWrapper>
          <SearchPanelWrapper>
            <RouteFilterOption
              type="range"
              title="Прибытие"
              contents={slider}
            />
            <RouteFilterOption
              type="range"
              title="Длительность"
              contents={slider}
            />
            <RouteFilterOption
              type="checkbox"
              title="Транспорт"
              contents={{ options: ["Авиа", "ЖД", "Такси"] }}
            />
            <RouteFilterOption
              type="radio"
              title="Багаж"
              contents={{ options: ["Есть", "Нет"] }}
            />
          </SearchPanelWrapper>
        </SearchResults>
      </Fragment>
    );
  }
}

export default RouteSearch;

const slider = {
  min: 0,
  max: 22,
  type: "time"
};

const check = {
  options: ["хуй", "залупа", "пенис", "хер"]
};

const route = [
  { type: "taxi", title: "uber", cost: "399$" },
  { type: "plane", title: "Аэрофлот", cost: "399$" },
  { type: "plane", title: "Аэроэкспресс", cost: "399$" },
  { type: "taxi", title: "hui", cost: "399$" }
];
