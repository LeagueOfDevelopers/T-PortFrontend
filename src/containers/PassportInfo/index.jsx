import React from "react";
import styled from "styled-components";
import SectionLabel from "../../components/General/SectionLabel";
import Button from "../../components/General/Button";
import PassportTemplate from "../../components/Profile/InfoTemplates/PassportTemplate";
import { media, hideOn } from "../../utils/helpers";

const Info = styled.div`
  display: inline-block;
  /* margin: 0 20px; */
  box-sizing: border-box;
  vertical-align: top;
  width: 70%;
  padding: 0 30px;
  ${media.small`
    width: 100%;
`}
`;

const PassportInfo = () => {
  return (
    <Info>
        <SectionLabel text="Паспортные данные"/>
      <PassportTemplate id="passport"/>
      <Button value="Сохранить" from="passport"/>
    </Info>
  );
};

export default PassportInfo;
