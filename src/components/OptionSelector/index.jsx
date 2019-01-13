import React, { Component, Fragment } from "react";
import styled from "styled-components";

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options
    };
  }
  render() {
    return (
      <Fragment>
        {this.state.options.map((el, i) => (
          <div key={i}>
            <input type={this.props.type} name={this.props.name} id={el + i} />
            <label htmlFor={el + i}>{el}</label>
          </div>
        ))}
      </Fragment>
    );
  }
}

export default Selector;
