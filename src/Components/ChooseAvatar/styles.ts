import styled, { css } from 'styled-components';

import { colors } from 'Styles/styleGuide';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

interface AvatarImageProps {
  isSelected: boolean;
}

export const AvatarImage = styled.img<AvatarImageProps>`
  ${({ isSelected }) => css`
    border: 4px solid ${isSelected ? colors.positive : colors.white};
    border-radius: 50%;
    cursor: pointer;
    margin: 1px;
    width: 80px;
  `}
`;
