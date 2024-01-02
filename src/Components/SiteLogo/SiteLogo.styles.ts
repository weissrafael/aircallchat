import styled, { css } from 'styled-components';

import { componentSize, screens } from 'Styles/styleGuide';

const { siteLogoWidthMobile, siteLogoWidthDesktop } = componentSize;
export const SiteLogoStyled = styled.svg`
  cursor: pointer;
  width: ${siteLogoWidthMobile}px;
  @media (min-width: ${screens.medium}px) {
    width: ${siteLogoWidthDesktop}px;
  }
`;
