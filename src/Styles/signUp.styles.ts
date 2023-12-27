import { TextField } from '@mui/material';
import styled from 'styled-components';

import { spacing, colors } from './styleGuide';

export const LoginContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const FormRow = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
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
  height: ${spacing.medium};
  width: ${spacing.medium};
`;
