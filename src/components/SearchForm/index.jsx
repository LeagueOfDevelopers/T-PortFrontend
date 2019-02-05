import React, { Component } from "react";
import styled from "styled-components";
import Input from "../Input";
import SearchButton from "../Button";
import SwitchRoutes from "../../components/Switch/SwitchRoutes";
import { media, padding } from "../../utils/helpers";

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
      margin-left: 30px;
      margin-right: 30px;
    `}
  ${media.small`
      margin-left: 5px;
      margin-right: 5px;
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
  font-weight: 600;
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
