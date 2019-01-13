import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  /* border-top: 1px solid #f3efef; */
  min-height: 60px;
  position: relative;
  z-index: 2;

  text-align: start;
  font-size: 12px;
  letter-spacing: -0.4px;
`;
const ContentWrapper = styled.div`
  max-width: 950px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Column = styled.div`
padding-top: 10px;
padding-bottom: 7px;
`;

const ColumnLable = styled.div`
  font-size: 20px;
  letter-spacing: -0.7px;
  margin: 8px 0;
`;

const Info = styled.div`
  margin: 8px 0;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <ContentWrapper>
        <Column>
          <ColumnLable>Контакты</ColumnLable>
          <Info>
            <a href="tel:+79991234567890"> +7(999)1234567890</a>
          </Info>
          <Info>
            <a href="tel:+79991234567890"> +7(999)1234567890</a>
          </Info>
          <Info>
            <a href="mailto:Tport@gmail.com">Tport@gmail.com</a>
          </Info>
        </Column>
        <Column>
          <ColumnLable>Социальные сети</ColumnLable>
          <Info>
            <a href="https://vk.com/leon_bigbon">Вконтакте</a>
          </Info>
          <Info>
            <a href="https://instagram.com">Instagram</a>
          </Info>
          <Info>
            <a href="https://twitter.com">Twitter</a>
          </Info>
        </Column>
        <Column>
          <ColumnLable>Партнеры</ColumnLable>
          <Info>
            <a href="https://vk.com/leon_bigbon">Вконтакте</a>
          </Info>
          <Info>
            <a href="https://instagram.com">Instagram</a>
          </Info>
          <Info>
            <a href="https://twitter.com">Twitter</a>
          </Info>
        </Column>
        <Column>
          <ColumnLable>О нас</ColumnLable>
          <Info>
            <a href="https://vk.com/leon_bigbon">Я</a>
          </Info>
          <Info>
            <a href="https://instagram.com">ебал</a>
          </Info>
          <Info>
            <a href="https://twitter.com">твой рот</a>
          </Info>
        </Column>
      </ContentWrapper>
    </StyledFooter>
  );
};

export default Footer;
