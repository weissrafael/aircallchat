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
  text,
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
  align-items: flex-end;
  padding: 9px ${spacing.small};
`;

export const SiteLogo = styled.svg`
  cursor: pointer;
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

export const TopLeftTabButton = styled(TopRightTabButton)`
  border-bottom: none;
  margin: 0;
  padding: 0;
  width: auto !important;
  svg {
    color: ${colors.gray10};
    font-size: 2.8rem;
  }
`;

export const ChatContactAvatar = styled.img`
  max-width: 42px;
  @media (min-width: ${screens.medium}px) {
    max-width: 56px;
  }
`;

export const UserName = styled.div<{ isGroup: boolean }>`
  ${({ isGroup }) => css`
    align-items: center;
    color: ${colors.gray10};
    display: flex;
    font-size: ${text.h1};
    height: 100%;
    justify-content: center;
    position: absolute;
    right: 0;
    top: ${isGroup ? -2 : -6}px;
    width: 100%;
    @media (min-width: ${screens.medium}px) {
      top: ${isGroup ? -4 : -8}px;
    }
  `}
`;

export const InfoContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  width: 100%;
`;

export const LastSeenAt = styled.div`
  align-items: flex-end;
  color: ${colors.gray9};
  display: flex;
  font-size: ${text.smallBody};
  height: 100%;
  justify-content: center;
  position: absolute;
  right: 0;
  top: -4px;
  width: 100%;
  @media (min-width: ${screens.medium}px) {
    top: -13px;
  }
`;
