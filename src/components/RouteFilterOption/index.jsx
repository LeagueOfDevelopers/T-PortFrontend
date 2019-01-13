import React, { Component, Fragment } from "react";
import styled from "styled-components";
import DoubleRange from "../DoubleRangeSlider";
import OptionSelector from "../OptionSelector";

const Filter = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
    /* background-color: red; */
  }
`;

const SliderWrapper = styled.div`
  margin: 25px 0;
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
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      contents: props.contents,
      title: props.title
    };
  }
  render() {
    let type = this.state.type;
    return (
      <Filter>
        <Title>{this.state.title}</Title>
        {(type === "checkbox" || type === "radio") && (
          <CheckboxWrapper>
            <OptionSelector
              options={this.state.contents.options}
              type={type}
              name={this.state.title}
            />
          </CheckboxWrapper>
        )}
        {type === "range" && (
          <Fragment>
            <Info>info</Info>
            <SliderWrapper>
              <DoubleRange
                min={this.state.contents.min}
                max={this.state.contents.max}
              />
            </SliderWrapper>
          </Fragment>
        )}
      </Filter>
    );
  }
}

export default FilterOption;
