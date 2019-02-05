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

const PinOutside = styled.div.attrs(props => ({
  style: { left: `calc(${props.pos + "%"} - 10.5px)` }
}))`
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

const Interval = styled.div.attrs(props => ({
  style: {
    left: props.posStart + "%",
    right: 100 - props.posEnd + "%"
  }
}))`
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
  left: -11px;
  right: -11px;
  /* background-color: rgba(0, 0, 0, 0.5); */
`;

class DoubleRangeSlider extends Component {
  state = {
    first: 0,
    second: 100,
    pressed: ""
  };

  handleMouseDown = e => {
    // console.log(
    //   e.touches,
    //   // e.target.offsetTop,
    //   e.nativeEvent.offsetX,
    //   e.target.offsetWidth,
    //   e.currentTarget.offsetWidth
    // );

    let firstD = Math.abs(
      (this.state.first / 100) * e.target.offsetWidth -
        (e.nativeEvent.offsetX !== undefined
          ? e.nativeEvent.offsetX
          : e.touches[0].clientX - e.target.getBoundingClientRect().x)
    );
    let secondD = Math.abs(
      (this.state.second / 100) * e.target.offsetWidth -
        (e.nativeEvent.offsetX !== undefined
          ? e.nativeEvent.offsetX
          : e.touches[0].clientX - e.target.getBoundingClientRect().x)
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
      let SliderWidth = e.target.offsetWidth;
      // console.log(SliderWidth);
      //(e.nativeEvent.offsetX || e.touches[0].clientX - e.target.getBoundingClientRect().x)
      let newPercent =
        ((e.nativeEvent.offsetX !== undefined
          ? e.nativeEvent.offsetX - 11
          : e.touches[0].clientX - e.target.getBoundingClientRect().x - 11) /
          (e.target.offsetWidth - 22)) *
        100;
      newPercent = Math.min(Math.max(newPercent, 0), 100);
      if (
        Math.abs(
          ((newPercent - this.state[this.getOther(this.state.pressed)]) / 100) *
            (SliderWidth - 22)
        ) < 21
      ) {
        let offset = 21;
        if (this.state.pressed === "second") {
          offset *= -1;
        }
        let newOtherPersent = newPercent + (offset / SliderWidth) * 100;
        newOtherPersent = Math.min(Math.max(newOtherPersent, 0), 100);
        this.setState({ [this.getOther(this.state.pressed)]: newOtherPersent });
      }
      this.setState({
        [this.state.pressed]: newPercent
      });
    }
  };

  getOther = pressedName => (pressedName === "first" ? "second" : "first");

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
            onMouseMove={this.handleMouseMove}
            onMouseUp={this.handleMouseUp}
            onMouseLeave={this.handleMouseUp}
            onTouchStart={this.handleMouseDown}
            onTouchMove={this.handleMouseMove}
            onTouchEnd={this.handleMouseUp}
          />
        </Slider>
      </SliderWrapper>
    );
  }
}

export default DoubleRangeSlider;
