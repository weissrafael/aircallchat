import { TextField } from '@mui/material';
import styled from 'styled-components';

import { spacing, colors } from './styleGuide';

export const LoginContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  .MuiFormHelperText-contained {
    border-radius: 12px;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 30px;
  }
`;

export const LoginInput = styled(TextField)`
  margin-top: ${spacing.small} !important;
  width: 100%;
  label {
    color: ${colors.gray9} !important;
  }
  fieldset {
    border-radius: 22px !important;
  }

  & .MuiInput-underline:after {
    border-bottom-color: ${colors.positive};
  }
  & .MuiOutlinedInput-root {
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
