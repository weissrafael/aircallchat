import { TextField } from '@mui/material';
import styled from 'styled-components';

import { spacing, colors } from './styleGuide';

export const LoginContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
  top: -70px;
  width: 100%;
  fieldset {
    border-radius: 22px !important;
  }
`;

export const LoginInput = styled(TextField)`
  margin-top: ${spacing.small} !important;
  width: 100%;
  & label.Mui-focused {
    color: ${colors.positive};
  }
  & .MuiInput-underline:after {
    border-bottom-color: ${colors.positive};
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${colors.positive} !important;
    }
    &:hover fieldset {
      border-color: ${colors.positive};
    }
    &.Mui-focused fieldset {
      border-color: ${colors.positive};
    }
  }
`;

export const Space = styled.div`
  margin-bottom: ${spacing.small} !important;
`;
