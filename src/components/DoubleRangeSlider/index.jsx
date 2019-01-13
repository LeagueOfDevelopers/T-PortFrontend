import React, { Component } from "react";
import styled from "styled-components";

const SliderWrapper = styled.div`
  display: inline-block;
  width: 100%;
  /* height: 35px; */
`;

const Slider = styled.div`
  height: 7px;
  width: 100%;
  position: relative;
  margin: 10px 0;
  /* z-index: 100; */
  background-color: transparent;
  box-shadow: inset 0 0 2px 0 rgba(173, 172, 172, 0.5);
  border-radius: 4.5px;
`;

const PinOutside = styled.div.attrs({
  style: ({pos}) => ({left: `calc(${pos + "%"} - 10.5px)`}),
})`
  display: inline-block;
  box-sizing: border-box;
  width: 21px;
  height: 21px;
  border-radius: 10.5px;
  background-color: #fbc328;
  padding: 6px;
  position: absolute;
  /* z-index: 50; */
  top: -7px;
  /* left: calc(${props => props.pos + "%"} - 10.5px); */
  box-shadow: 0 1px 4px 0 rgba(110, 109, 109, 0.31);
`;

const PinInside = styled.div`
  /* display: inlide-block; */
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
  background-color: white;
`;

const Pin = props => (
  <PinOutside pos={props.pos}>
    <PinInside />
  </PinOutside>
);

const Interval = styled.div.attrs({
  style: (props) => ({
    left: props.posStart + "%",
    right: 100 - props.posEnd + "%",
  })
})`
  position: absolute;
  background-color: #fbc328;
  /* height: 100%; */
  top: 0;
  bottom: 0;
  /* left: ${props => props.posStart + "%"}; */
  /* right: ${props => 100 - props.posEnd + "%"}; */
`;

const Overlay = styled.div`
  position: absolute;
  top: -9px;
  bottom: -9px;
  left: 0;
  right: 0;
`;

class DoubleRangeSlider extends Component {
  state = {
    first: 20,
    second: 80,
    pressed: ""
  };

  handleMouseDown = e => {
    // console.log(
    //   e.nativeEvent.offsetX,
    //   e.target.offsetWidth,
    //   e.currentTarget.offsetWidth
    // );

    let firstD = Math.abs(
      (this.state.first / 100) * e.target.offsetWidth - e.nativeEvent.offsetX
    );
    let secondD = Math.abs(
      (this.state.second / 100) * e.target.offsetWidth - e.nativeEvent.offsetX
    );
    if (firstD < secondD) {
      this.setState({
        pressed: "first"
      });
    } else {
      this.setState({
        pressed: "second"
      });
    }
  };

  handleMouseMove = e => {
    if (!!this.state.pressed) {
      // console.log(e);
      let newPercent = (e.nativeEvent.offsetX / e.target.offsetWidth) * 100;
      if (this.state.second - this.state.first < 0) {
        // console.log("jiiii");
        
        this.setState(prevState => ({ first: prevState.second }));
      }
      this.setState({
        [this.state.pressed]: newPercent
      });
    }
  };

  handleMouseUp = e => {
    this.setState({ pressed: "" });
  };

  render() {
    return (
      <SliderWrapper>
        <Slider>
          <Interval posStart={this.state.first} posEnd={this.state.second} />
          <Pin pos={this.state.first} />
          <Pin pos={this.state.second} />
          <Overlay
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
            onMouseMove={this.handleMouseMove}
          />
        </Slider>
      </SliderWrapper>
    );
  }
}

export default DoubleRangeSlider;
