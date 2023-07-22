import styled, { css } from 'styled-components';

import { TabButton } from 'Styles/common.styles';
import {
  borderType,
  colors,
  componentSize,
  layerOrder,
  screens,
  shadows,
  spacing,
} from 'Styles/styleGuide';

const {
  headerHeightMobile,
  headerHeightDesktop,
  siteLogoWidthMobile,
  siteLogoWidthDesktop,
} = componentSize;

export const HeaderContainer = styled.nav`
  align-items: center;
  background-color: ${colors.white};
  box-shadow: ${shadows.shadowDown8};
  display: flex;
  flex-direction: row;
  height: ${headerHeightMobile}px;
  justify-content: center;
  padding: 0 ${spacing.small};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${layerOrder.levelOne};
  @media (min-width: ${screens.medium}px) {
    height: ${headerHeightDesktop}px;
  }
`;

export const HeaderChatContainer = styled(HeaderContainer)`
  padding: 0;
`;

export const SiteLogo = styled.svg`
  cursor: pointer;
  margin-left: ${spacing.xxSmall};
  width: ${siteLogoWidthMobile}px;
  @media (min-width: ${screens.medium}px) {
    width: ${siteLogoWidthDesktop}px;
  }
`;

export const NavigationTabs = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: flex-end;
  padding-right: ${spacing.xxSmall};
  width: 100%;
`;

export const NavigationChat = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: flex-start;
  padding-left: ${spacing.xxSmall};
  width: 100%;
`;

export const TopRightTabButton = styled(TabButton)`
  ${({ $active }) => css`
    align-items: center;
    border-bottom: ${borderType.activePage}
      ${$active ? colors.positive : colors.transparent};
    border-top: none;
    margin-left: ${spacing.small};
    margin-right: 0;
    @media (min-width: ${screens.medium}px) {
      margin-left: ${spacing.medium};
    }
  `}
`;
