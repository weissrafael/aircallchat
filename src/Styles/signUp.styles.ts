import { TextField } from '@mui/material';
import styled from 'styled-components';

import { spacing, colors } from './styleGuide';

export const SignUpContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 80vh;
  width: 100%;
  .MuiFormHelperText-contained {
    position: absolute;
    top: 54px;
  }
`;

export const FormRow = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const SignUpInput = styled(TextField)`
  margin-bottom: ${spacing.small} !important;
  margin-top: ${spacing.xSmall} !important;
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
