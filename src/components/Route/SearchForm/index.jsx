import React, { Component } from "react";
import styled from "styled-components";
import Input from "../../General/Input";
import SearchButton from "../../General/Button";
import SwitchRoutes from "../../General/Switch/SwitchRoutes";
import DatePicker from "../../General/DatePicker";
import { media, padding } from "../../../utils/helpers";

const StyledSearchForm = styled.form`
  padding: 19px 15px;
  border-radius: 11px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  max-width: 940px;
  height: fit-content;
  position: relative;
  background-color: white;
  text-align: start;
  ${media.large`
    margin: 0 auto;
  `}
  ${media.medium`
      /* margin-left: 30px;
      margin-right: 30px; */
  `}
  ${media.small`
      /* margin: 0 10px; */
      padding-top: 25px;
  `}
`;

const StyledSwitchRoutes = styled.div`
  display: inline-block;
  width:0;
  height:0;
  background-color: white;
  text-align: center;
  ${media.large`
    position: relative;
    right: 13px;
  `}
  ${media.medium`
    position: relative;
    right: 13px;
  `}
  ${media.small`
      position: absolute;
      right: 25px;
      top: 57px;
      transform: rotate(90deg);
  `}
`;

const StyledInputWrapper = styled.div`
  display: inline-block;
  box-sizing: border-box;
  padding: 0 15px;
  position: relative;
  ${media.large`
      width: 29%;
     
    `}
  ${media.medium`
      width: 50%;
    `}
  ${media.small`
      width: 100%;
      margin-bottom: 8px;
    `}
`;

const StyledButtonWrapper = styled.div`
  margin-right:15px;
  ${media.large`
      float: right;
      margin-top: 7px;
    `}
  ${media.medium`
      float: right;
      margin-top: 15px;
    `}
  ${media.small`
    display : block;
    width: fit-content;
    margin: 0 auto;
    margin-top: 16px;
  `}

`;

const StyledLabel = styled.label`
  font-size: 20px;
  font-weight: 600;
  /* text-align: start; */
`;

class SearchForm extends Component {
  state = {
    from: "",
    to: "",
    fromSuggestions: [],
    toSuggestions: [],
    when: ""
  };

  handleSwitch = () => {
    this.setState(prevstate => {
      return { from: prevstate.to, to: prevstate.from };
    });
  };

  handleChange = e => {
    console.log(e.target.name, e.target.value);

    this.setState({
      [e.target.name]: e.target.value
    });
    this.fetchSuggestions(e.target.value, e.target.name);
  };

  handleSuggestionClick = (inputName, suggestion) => {
    console.log(inputName, suggestion);
    this.setState({
      [inputName]: suggestion
    });
  };

  fetchSuggestions = (val, name) => {
    fetch(
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Token 37c7f179a6d97851c4b94aff29435309cec0438d"
        },
        credentials: "omit",
        mode: "cors",
        body: JSON.stringify({
          query: val,
          count: 5
        })
      }
    )
      .then(res => res.json())
      .then(res => {
        res.suggestions.map(el => {
          console.log([el.value, el.data.geo_lat, el.data.qc_geo]);
        });
        this.setState({
          [name + "Suggestions"]: res.suggestions.map(el => el.value)
        });
      });
  };

  render() {
    return (
      <StyledSearchForm onSubmit={this.props.onSubmit}>
        <StyledInputWrapper>
          <StyledLabel htmlFor="from">Откуда: </StyledLabel>
          <br />
          <Input
            type="text"
            id="from"
            name="from"
            onChange={this.handleChange}
            value={this.state.from}
            suggestions={this.state.fromSuggestions}
            onSuggestionClick={this.handleSuggestionClick.bind(null, "from")}
          />
        </StyledInputWrapper>
        <StyledSwitchRoutes>
          <SwitchRoutes onClick={this.handleSwitch} />
        </StyledSwitchRoutes>
        <StyledInputWrapper>
          <StyledLabel htmlFor="to">Куда:</StyledLabel>
          <br />
          <Input
            type="text"
            id="to"
            name="to"
            onChange={this.handleChange}
            value={this.state.to}
            suggestions={this.state.toSuggestions}
            onSuggestionClick={this.handleSuggestionClick.bind(null, "to")}
          />
        </StyledInputWrapper>
        {/* <br/> */}
        <StyledInputWrapper>
          <StyledLabel htmlFor="when">Когда:</StyledLabel>
          <br />
          <Input type="text" id="when" suggestionComponent={<DatePicker />} />
        </StyledInputWrapper>
        {/* <SearchFilters>Фильтры</SearchFilters> */}
        <StyledButtonWrapper>
          <SearchButton />
        </StyledButtonWrapper>
      </StyledSearchForm>
    );
  }
}

export default SearchForm;
