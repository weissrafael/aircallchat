import styled, { css } from 'styled-components';

import { Size, Variant } from 'Models/UserInterfaceResources';
import {
  borderRadius,
  colors,
  fontWeights,
  spacing,
  transitions,
} from 'Styles/styleGuide';

interface Props {
  variant?: Variant;
  size?: Size;
}

function getVariantStyles(variant?: Variant) {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${colors.positive};
        &:hover {
          background-color: ${colors.positiveDark};
        }
        &:disabled {
          background-color: ${colors.gray6};
        }
      `;
    case 'primaryDark':
      return css`
        background-color: ${colors.positiveDark};
        &:hover {
          background-color: ${colors.positive};
        }
        &:disabled {
          background-color: ${colors.gray10};
        }
      `;
    case 'secondary':
      return css`
        background-color: ${colors.gray9};
        &:hover {
          background-color: ${colors.gray7};
        }
      `;
    case 'secondaryDark':
      return css`
        background-color: ${colors.gray10};
        &:hover {
          background-color: ${colors.gray8};
        }
      `;
  }
}

function getSizeStyles(size?: Size) {
  switch (size) {
    case 'big':
      return css`
        font-size: 1rem;
        height: 3rem;
      `;
    case 'medium':
      return css`
        height: 2.5rem;
      `;
    case 'small':
      return css`
        height: auto;
      `;
  }
}

export const StyledButton = styled.button<Props>`
  ${({ variant, size }) => css`
    align-items: center;
    border: none;
    border-radius: ${borderRadius.roundButton};
    color: ${colors.white};
    cursor: pointer;
    display: flex;
    flex-direction: row;
    font-weight: ${fontWeights.bold};
    justify-content: center;
    min-height: 2.8rem;
    padding: ${spacing.xSmall} ${spacing.small};
    transition: ${transitions.easeInOut2s};
    ${getVariantStyles(variant)}
    ${getSizeStyles(size)}
  `}
`;
