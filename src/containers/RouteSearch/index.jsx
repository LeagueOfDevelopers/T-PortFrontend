import React, { Component, Fragment } from "react";
import styled from "styled-components";
import SearchForm from "../../components/SearchForm";
import VariantCard from "../../components/VariantCard";
import SortOptionSelector from "../../components/SortOptionSelector";
import SearchOptionPanel from "../SearchOptionPanel";
import { media, hideOn } from "../../utils/helpers";

const StyledRouteSearch = styled.main`
  /* > input {
    display: inline-block;
    width: 200px;
  } */
`;

const SearchFormBg = styled.div`
  /* width: 100vw; */
  width: 100%;
  background-color: transparent;
  /* background-color: #033b79; */
  padding: 20px 0;
`;

const SearchResults = styled.div`
  max-width: 970px;
  margin: 0 auto;
  height: max-content;
  text-align: start;
  ${media.medium`
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: stretch;
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
  position: relative;
  ${media.small`
    width:100%;
    order:1;
    margin-bottom: 20px;
  `}
  ${media.medium`
    width:100%;
    order:1;
    margin-bottom: 20px;
    
    `}
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
    order:2
    width: 100%;
    padding-right: 0;
  `}
`;

const VariantsInfo = styled.div`
  /* height: fit-content; */
  margin-bottom: 22px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const VariantsAmount = styled.div`
  display: inline-block;
  /* text-align: left; */
`;

const SortOptions = styled.div`
  display: inline-block;
  /* text-align: right; */
`;

const SortBy = styled.div`
  display: inline-block;
  margin: auto 0;
  white-space: pre;
`;

const Vriants = styled.div`
  position: relative;
  z-index: 50;

  & > div {
    margin-bottom: 20px;
  }
`;

//////////////////////////////////////////////
const route1 = {
  subRoutes: [
    { type: "taxi", title: "uber", cost: "399$" },
    { type: "plane", title: "Аэрофлот", cost: "399$" },
    { type: "train", title: "Аэроэкспресс", cost: "399$" },
    { type: "train", title: "РЖД", cost: "500$" },
    { type: "taxi", title: "hui", cost: "399$" },
    { type: "taxi", title: "hui", cost: "399$" },
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

const slider = {
  min: 0,
  max: 22,
  type: "time"
};

const RouteOptions = [
  { type: "range", title: "Прибытие", contents: slider },
  { type: "range", title: "Длительность", contents: slider },
  { type: "checkbox", title: "Транспорт", contents: ["Авиа", "Жд", "Такси"] },
  { type: "radio", title: "Багаж", contents: ["Есть", "Нет"] }
];

//////////////////////////////////////////////

class RouteSearch extends Component {
  state = {
    routes: [route1, route2, route3],
    searchOptions: [],
    sortType: "",
    filtersSate: new Array(RouteOptions.length)
  };

  handleSearch = e => {
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

  handleSearchGet = e => {
    e.preventDefault();
    for (let i of e.target) {
      console.log(i);
    }

    let info = {
      departureCityName: e.target[0].value,
      destinationCityName: e.target[1].value,
      departDate: e.target[2].value || new Date().toISOString().split("T")[0]
    };
    console.log(info);

    fetch(
      `http://tport-test.lod-misis.ru/trips?departureCityName=${
        info.departureCityName
      }&destinationCityName=${info.destinationCityName}&departDate=${
        info.departDate
      }`,
      {
        method: "GET",
        headers: {
          // "Content-Type": "application/json"
          // "Accept" : "application/json"
        }
        // credentials: "omit",
        // mode: "cors",
        // body: JSON.stringify(info)
      }
    )
      .catch(er => {
        console.log("unable to fetch");
      })
      .then(res => res.json())
      .catch(er => {
        console.log("unable to parse json");
      })
      .then(res => {
        res = res.slice(0, 10);
        console.log("fetched", res);
        this.setState({
          routes: res.map(el => ({
            totalCost: el.cost,
            subRoutes: el.routes.map(sub => ({
              type: "plane",
              title: sub.transport.name,
              cost: sub.cost
            })),
            arrivalTime: Date.parse(el.routes[0].arrivalDate),
            points: {
              departure: el.destination.fromPlace.name,
              destination: el.destination.toPlace.name
            }
          }))
        });
      })
      .catch(er => {
        console.log(er);
      });
  };

  handleSort = sortType => {
    this.setState({ sortType: sortType });
    console.log("from page  " + sortType);
  };

  render() {
    let comparer = (a, b) => a.totalCost - b.totalCost;
    switch (this.state.sortType) {
      case "costasc":
        comparer = (a, b) => a.totalCost - b.totalCost;
        break;
      case "costdes":
        comparer = (a, b) => b.totalCost - a.totalCost;
        break;
      case "arrival":
        comparer = (a, b) => a.arrivalTime - b.arrivalTime;
        break;
      case "subroutes":
        comparer = (a, b) => a.subRoutes.length - b.subRoutes.length;
        break;
      default:
        break;
    }
    return (
      <Fragment>
        <SearchFormBg>
          <SearchForm onSubmit={this.handleSearchGet.bind(this)} />
        </SearchFormBg>
        <SearchResults>
          <SearchVariantsWrapper>
            <VariantsInfo>
              <VariantsAmount>666 вариантов</VariantsAmount>
              <SortOptions>
                <SortBy>Сортировать по: </SortBy>
                <SortOptionSelector
                  options={[
                    { name: "релевантности", code: "relevance" },
                    { name: "цене v", code: "costdes" },
                    { name: "цене ^", code: "costasc" },
                    { name: "длительности", code: "duration" },
                    { name: "пересадкам", code: "subroutes" },
                    { name: "врнемени прибытия", code: "arrival" }
                  ]}
                  onChange={this.handleSort}
                />
              </SortOptions>
            </VariantsInfo>
            <Vriants>
              {this.state.routes.sort(comparer).map((el, i) => (
                <VariantCard route={el} key={i} noPoints/>
              ))}
            </Vriants>
          </SearchVariantsWrapper>
          <SearchPanelWrapper>
            <SearchOptionPanel options={RouteOptions} />
          </SearchPanelWrapper>
        </SearchResults>
      </Fragment>
    );
  }
}

export default RouteSearch;
