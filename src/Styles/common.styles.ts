import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors, componentSize, screens, spacing } from './styleGuide';
const { loaderSize, modalLoaderSize } = componentSize;

export const PageBody = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px ${spacing.small};
  @media (min-width: ${screens.medium}px) {
    padding: 80px 0 0 0;
    max-width: 700px;
    margin: auto;
  }
`;

export const PageHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${spacing.xxSmall};
  padding-left: ${spacing.xxSmall};
  width: 100%;
`;

export const ErrorHeader = styled(PageHeader)`
  align-items: center;
  font-size: 1.8rem;
  justify-content: center;
  margin-bottom: ${spacing.large};
`;

export const ScreenLimiter = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  max-width: 700px;
  width: 100%;
`;

export const ScreenLimiterChat = styled(ScreenLimiter)`
  align-items: flex-end;
`;

export const ErrorImage = styled.img`
  margin-top: ${spacing.large};
  width: 18rem;
  @media (min-width: ${screens.medium}px) {
    margin-top: ${spacing.small};
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
