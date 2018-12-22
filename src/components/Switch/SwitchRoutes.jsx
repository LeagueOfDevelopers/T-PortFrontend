import React from "react";
import styled from "styled-components";

const StyledSwitch = styled.div`
  display: inline-block;
  width: 26px;
  height: 26px;
  box-shadow: 0 0 4px 0 rgba(177, 169, 169, 0.34);
  border-radius: 13px;
  background-color: red;
  background-image: url("assets/switch.png");
  background-size: cover;
`;

const SwitchRoutes = props => {
  return <StyledSwitch onClick={props.onClick}></StyledSwitch>;
};

export default SwitchRoutes;
