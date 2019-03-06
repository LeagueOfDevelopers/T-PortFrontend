import React from "react";
import styled from "styled-components";
import SectionLabel from "../../components/General/SectionLabel";
import Button from "../../components/General/Button";
import ContactTemplate from "../../components/Profile/InfoTemplates/ContactTemplate";
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

const ContactInfo = () => {
  return (
    <Info>
        <SectionLabel text="Контактные данные"/>
      <ContactTemplate id="contact"/>
      <Button value="Сохранить" from="contact"/>
    </Info>
  );
};

export default ContactInfo;