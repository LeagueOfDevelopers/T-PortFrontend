import React, { Component, Fragment } from "react";
import styled from "styled-components";
import DoubleRange from "../DoubleRangeSlider";
import OptionSelector from "../OptionSelector";
import { media } from "../../../utils/helpers";

const Filter = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
    /* background-color: red; */
  }
  ${media.medium`
    box-sizing: border-box;
    width:  50%;
    padding: 0 15px;
    display: inline-block;
    &:not(:last-child) {
    border-bottom: none;
    /* background-color: red; */
  }
  `}
`;

const SliderWrapper = styled.div`
  margin: 25px 11px;
`;

const CheckboxWrapper = styled.div`
  margin-bottom: 10px;
`;

const Title = styled.div`
  padding: 12px 0;
  font-size: 17px;
`;

const Info = styled.div`
  color: #9b9b9b;
  font-size: 20px;
`;

class FilterOption extends Component {
  render() {
    let type = this.props.type;
    let title = this.props.title;
    let options = this.props.contents;
    return (
      <Filter>
        <Title>{title}</Title>
        {(type === "checkbox" || type === "radio") && (
          <CheckboxWrapper>
            <OptionSelector options={options} type={type} name={title} />
          </CheckboxWrapper>
        )}
        {type === "range" && (
          <Fragment>
            <Info>info</Info>
            <SliderWrapper>
              <DoubleRange min={options.min} max={options.max} />
            </SliderWrapper>
          </Fragment>
        )}
      </Filter>
    );
  }
}

export default FilterOption;
