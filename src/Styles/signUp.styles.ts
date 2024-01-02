import styled from 'styled-components';

import { LoginContainer, LoginInput } from './login.styles';
import { spacing, colors } from './styleGuide';

export const SignUpContainer = styled(LoginContainer)`
  h1 {
    color: ${colors.gray10};
    margin: 0;
  }
`;

export const FormRow = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const SignUpInput = styled(LoginInput)``;

export const Space = styled.div`
  min-height: ${spacing.small};
  min-width: ${spacing.small};
`;
