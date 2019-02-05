import React from "react";
import styled from "styled-components";
import { media } from "../../utils/helpers";

const MainWrapper = styled.div`
  max-width: 950px;
  height: 100%;
  margin: 0 auto;
  min-height: calc(100vh - 66px);
  padding-top: 30px;
  text-align: left;
  ${media.medium`
    margin: 0 20px;
  `}
`;

const SlimWrapper = props => <MainWrapper>{props.children}</MainWrapper>;

export default SlimWrapper;
