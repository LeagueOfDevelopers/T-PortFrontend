import React from 'react';
import styled from "styled-components";

const StyledLable = styled.div`
    height: 48px;
    font-size: 20px;
`;

const SectionLable = (props) => {
    return ( 
        <StyledLable>{props.text}</StyledLable>
     );
}
 
export default SectionLable;