import React from 'react';
import styled from "styled-components";
import { media, hideOn } from "../../utils/helpers";

const PersonalDataNav = styled.div`
  display: inline-block;
  text-align: start;
  box-sizing: border-box;
  width: 30%;
  padding-top: 25px;
  padding-bottom: 40px;
  vertical-align: top;

  background-color: white;
  border-radius: 11px;
  box-shadow: 0 2px 4px 0 rgba(189, 184, 184, 0.45);
  /* margin-top: 60px; */

  ${media.medium`
    /* background-color: red; */
  `}
  ${media.small`
    /* background-color: green; */
    width: 100%;
  `}
`;

const DataNav = (props) => {
    return ( 
    <PersonalDataNav>
        {props.children}
    </PersonalDataNav> 
    );
}
 
export default DataNav;