import React from 'react';

import RoundButton from 'Components/RoundButton/RoundButton';
import { FormState } from 'Models/ContactResource';
import { SignUpInput, Space, FormRow } from 'Styles/signUp.styles';
import { spacing } from 'Styles/styleGuide';

interface SignUpFormProps {
  formState: FormState;
  errors: {
    [key: string]: string;
  };
  updateInput: (field: keyof FormState, value: string) => void;
  validateInput: (field: keyof FormState) => void;
  handleContinue: () => void;
  goBack: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  formState,
  errors,
  updateInput,
  validateInput,
  handleContinue,
  goBack,
}) => {
  return (
    <>
      <FormRow>
        <SignUpInput
          label="Name"
          value={formState.name}
          onChange={(e) => updateInput('name', e.target.value)}
          helperText={errors.name}
          error={!!errors.name}
          onBlur={() => validateInput('name')}
        />
        <Space />
        <SignUpInput
          label="Lastname"
          value={formState.lastname}
          onChange={(e) => updateInput('lastname', e.target.value)}
          helperText={errors.lastname}
          error={!!errors.lastname}
          onBlur={() => validateInput('lastname')}
        />
      </FormRow>
      <SignUpInput
        label="E-mail"
        value={formState.email}
        onChange={(e) => updateInput('email', e.target.value)}
        helperText={errors.email}
        error={!!errors.email}
        type="email"
        onBlur={() => validateInput('email')}
      />
      <SignUpInput
        type="password"
        label="Password"
        value={formState.password}
        onChange={(e) => updateInput('password', e.target.value)}
        helperText={errors.password}
        error={!!errors.password}
        onBlur={() => validateInput('password')}
      />
      <SignUpInput
        type="password"
        label="Confirm Password"
        value={formState.confirmPassword}
        onChange={(e) => updateInput('confirmPassword', e.target.value)}
        helperText={errors.confirmPassword}
        error={!!errors.confirmPassword}
        onBlur={() => validateInput('confirmPassword')}
      />
      <Space />
      <RoundButton
        style={{ width: '100%', marginBottom: spacing.xsSmall }}
        onClick={handleContinue}
        variant="primary"
        size="big"
      >
        Continue
      </RoundButton>
      <RoundButton
        style={{ width: '100%' }}
        onClick={goBack}
        variant="secondary"
        size="big"
      >
        Go Back
      </RoundButton>
    </>
  );
};

export default SignUpForm;
