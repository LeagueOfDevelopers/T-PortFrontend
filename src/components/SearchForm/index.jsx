import React, { Component } from "react";
import styled from "styled-components";
import Input from "../Input";
import SearchFilters from "./SearchFilters";
import SearchButton from "../Button";
import SwitchRoutes from "../../components/Switch/SwitchRoutes";
import { join } from "path";
import { media, padding } from "../../utils/helpers";

const StyledSearchForm = styled.form`
  ${props =>
    media.large({
      margin: "0 auto"
    })}
  ${props =>
    media.medium({
      "margin-left": "30px;",
      "margin-right": "30px;"
    })}
  ${props =>
    media.small({
      "margin-left": "5px;",
      "margin-right": "5px;"
    })}

  padding: 19px 24px;
  border-radius: 29px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  max-width: 940px;
  height: fit-content;
  position: relative;
  background-color: white;
    text-align: start;
  
`;

const StyledSwitchRoutes = styled.div`
  
  display: inline-block;
  width:0;
  height:0;
  background-color: white;
  text-align: center;

   ${props =>
     media.large({
       position: "relative;",
       right: "30px"
     })}
  ${props =>
    media.medium({
      position: "relative;",
      right: "30px"
      // top: "45px"
    })}
  ${props =>
    media.small({
      position: "absolute",
      right: "35px",
      top: "57px"
    })}
`;

const StyledInputWrapper = styled.div`
  display: inline-block;
  ${props =>
    media.large({
      width: "28%;"
    })}
  ${props =>
    media.medium({
      width: "50%;"
    })}
  ${props =>
    media.small({
      width: "100%;"
    })}
`;

const StyledButtonWrapper = styled.div`
  
  ${media.large`
      float: right;
      margin-top: 10px;
    `}
  ${media.medium`
      float: right;
      margin-top: 14px;
    `}
  ${media.small`
    display : block;
    width: fit-content;
    margin: 0 auto;
    margin-top: 16px;
  `}

`;

const StyledLable = styled.label`
  font-size: 20px;
  font-weight: bold;
  /* text-align: start; */
`;

class SearchForm extends Component {
  state = {
    from: "",
    to: ""
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
  };

  render() {
    return (
      <StyledSearchForm onSubmit={this.props.onSubmit}>
        <StyledInputWrapper>
          <StyledLable htmlFor="from">Откуда: </StyledLable>
          <br />
          <Input
            type="text"
            id="from"
            name="from"
            onChange={this.handleChange}
            value={this.state.from}
          />
        </StyledInputWrapper>
        <StyledSwitchRoutes>
          <SwitchRoutes onClick={this.handleSwitch} />
        </StyledSwitchRoutes>
        <StyledInputWrapper>
          <StyledLable htmlFor="to">Куда:</StyledLable>
          <br />
          <Input
            type="text"
            id="to"
            name="to"
            onChange={this.handleChange}
            value={this.state.to}
          />
        </StyledInputWrapper>
        {/* <br/> */}
        <StyledInputWrapper>
          <StyledLable htmlFor="when">Когда:</StyledLable>
          <br />
          <Input type="text" id="when" />
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
