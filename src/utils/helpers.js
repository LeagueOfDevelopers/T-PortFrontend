import { css } from "styled-components";

export const media = {
  small: (...args) => css`
    @media (max-width: 39.999em) {
      ${css(...args)}
    }
  `,
  medium: (...args) => css`
    @media (min-width: 40em) and (max-width: 63.999em) {
      ${css(...args)}
    }
  `,
  large: (...args) => css`
    @media (min-width: 64em) {
      ${css(...args)}
    }
  `
};

export const hideOn = css`
    ${props => props.noAll && "display: none"};
    ${media.small`
       ${props => props.noSmall && "display: none"};
    `}
    ${media.medium`
       ${props => props.noMedium && "display: none"};
    `}
    ${media.large`
       ${props => props.noLarge && "display: none"};
    `}
  `;

export const padding = css`
    padding: ${props => (props.padding ? props.padding : 0)};
    ${props =>
      props.paddingSmall &&
      media.small`
        padding: ${props.paddingSmall};
    `}
    ${props =>
      props.paddingMedium &&
      media.medium`
        padding: ${props.paddingSmall};
    `}
    ${props =>
      props.paddingLarge &&
      media.large`
        padding: ${props.paddingSmall};
    `}
  `;
