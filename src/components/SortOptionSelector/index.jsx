import React, { Component } from "react";
import styled from "styled-components";

const Selector = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: fit-content;

  height: 100%;
  /* height: inherit; */
  background-color: white;
  border-radius: 8px;
  position: relative;
  /* vertical-align: top; */
  padding: 10px 16px;

  box-shadow: 0 2px 7px 0 #dbdddd;
`;

const Contents = styled.div`
  position: absolute;
  background-color: inherit;
  border-radius: inherit;
  z-index: 100;
  min-width: 50px;
  width: fit-content;
  padding: inherit;
  top: 0;
  left:0;
  right:0;
  box-shadow: 0 2px 7px 0 #dbdddd;

  > :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

class SortOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folded: true,
      selected: props.options[0]
    };
  }

  handleFoldClick = () => {
    console.log("Selector clicked");

    this.setState({ folded: false });
  };

  handleLeave = () => {
    console.log("Selector blured");
    this.setState({ folded: true });
  };

  handleUp = (el, callback) => {
    console.log(el);
    this.setState({ selected: el, folded: true });
    callback(el.code);
  };

  render() {
    return (
      <Selector onClick={this.handleFoldClick} onMouseLeave={this.handleLeave}>
        <div>{this.state.selected.name}</div>

        {!this.state.folded && (
          <Contents>
            {this.props.options.map((el, i) => (
              <div key={el.code + i} onMouseUp={this.handleUp.bind(null, el, this.props.onChange)}>
                {String(el.name)}
              </div>
            ))}
          </Contents>
        )}
      </Selector>
    );
  }
}

export default SortOptions;
