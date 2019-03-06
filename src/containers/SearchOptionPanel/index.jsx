import React, { Component, Fragment } from "react";
import styled, { css } from "styled-components";
import RouteFilterOption from "../../components/Route/RouteFilterOption";
import { media, hideOn } from "../../utils/helpers";

const Open = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  ${media.large`
    display: none;
  `}
  ${hideOn}
  ${props => {
    if (props.top) return "top: 0;";
    else if (props.bottom) return "bottom: 0;";
  }}
`;

const OpenImg = styled.img.attrs(props => ({
  src: "assets/" + (props.folded ? "OpenDown.png" : "OpenUp.png")
}))`
  display: block;
  margin: 8px auto;
  position: relative;
  cursor: pointer;
`;

const Panel = styled.div`
  background-color: white;
  box-sizing: border-box;
  width: 100%;
  border-radius: 8px;
  padding: 0px 30px;
  padding-bottom: 15px;
  box-shadow: 0 2px 7px 0 #dbdddd;
  ${media.small`
    padding: 8px;
  `}
  ${media.medium`
    ${props => {
      if (!props.folded) {
        return css`
          padding-right: 15px;
          padding-left: 15px;
        `;
      } else {
        return css`
          padding: 8px 16px;
        `;
      }
    }}
  `}
`;

class OptionPanel extends Component {
  state = {
    folded: false
  };

  handleCLick = () => {
    this.setState(prevState => ({ folded: !prevState.folded }));
  };

  handeResize = e => {
    if (this.state.folded && e.target.outerWidth > 16 * 64) {
      this.setState({
        folded: false
      });
    }
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.handeResize);
  };

  render() {
    return (
      <Panel folded={this.state.folded}>
        {this.state.folded && <div>Фильтры</div>}
        <div style={{ display: this.state.folded ? "none" : "" }}>
          {this.props.options.map((el, i) => (
            <RouteFilterOption
              type={el.type}
              title={el.title}
              contents={el.contents}
              index={i}
              key={el.title + i}
            />
          ))}
        </div>
        <Open bottom>
          <OpenImg
            folded={this.state.folded}
            // src="assets/OpenUp.png"
            alt="Показать"
            width="25px"
            onClick={this.handleCLick}
          />
        </Open>
      </Panel>
    );
  }
}

export default OptionPanel;
