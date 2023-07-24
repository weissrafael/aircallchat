import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors, componentSize, screens, spacing } from './styleGuide';
const { loaderSize, modalLoaderSize } = componentSize;

export const PageBody = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 120px);
  padding: 60px ${spacing.small} 0 ${spacing.small};
  @media (min-width: ${screens.medium}px) {
    padding: 80px 0 0 0;
    max-width: 500px;
    margin: auto;
  }
`;

export const PageHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: ${spacing.small};
  width: 100%;
  h1 {
    color: ${colors.gray10};
    margin: ${spacing.small} auto 0 0;
  }
  span {
    color: ${colors.gray9};
    margin: ${spacing.xxSmall} auto 0 0;
    padding-left: 2px};
  }
`;

export const ErrorHeader = styled(PageHeader)`
  align-items: flex-start;
  font-size: 1.8rem;
  justify-content: flex-start;
  margin-bottom: ${spacing.large};
  span {
    font-size: 1rem;
  }
`;

export const ScreenLimiter = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  max-width: 500px;
  width: 100%;
`;

export const StateContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

export const ScreenLimiterChat = styled(ScreenLimiter)`
  align-items: center;
`;

export const ScreenLimiterContacts = styled(ScreenLimiter)`
  align-items: center;
  justify-content: space-between;
`;

export const ErrorImage = styled.img`
  width: 18rem;
  @media (min-width: ${screens.medium}px) {
    width: 15rem;
  }
`;

interface TabButtonProps {
  $active?: boolean;
}

export const TabButton = styled(Link)<TabButtonProps>`
  align-items: center;
  background-color: transparent;
  border: none;
  border-top: 3px solid
    ${(props) => (props.$active ? colors.positive : colors.transparent)};
  color: ${colors.gray10};
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  margin-right: ${spacing.small};
  padding: ${spacing.small};
  position: relative;
  transition: border-color 0.3s ease-in-out;
  width: 50px;
  svg {
    font-size: 1.8rem;
  }
  &:hover {
    border-color: ${colors.positive};
  }
  @media (min-width: ${screens.small}px) {
    margin-right: ${spacing.medium};
    svg {
      font-size: 2rem;
    }
  }
`;

export const StyledCircularProgress = styled(CircularProgress)`
  color: ${colors.positive} !important;
  height: ${loaderSize}px !important;
  margin-left: auto;
  margin-right: ${spacing.xSmall};
  width: ${loaderSize}px !important;
`;

export const StyledCircularProgressModal = styled(CircularProgress)`
  color: ${colors.positive} !important;
  height: ${modalLoaderSize}px !important;
  margin-right: ${spacing.xSmall};
  width: ${modalLoaderSize}px !important;
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
`;
