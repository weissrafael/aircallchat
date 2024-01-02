import { useState } from 'react';

import { emailValidation, passwordValidation } from 'Utils/inputValidation';

interface FormState {
  name: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const useSignUpForm = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const updateInput = (field: keyof FormState, value: string) => {
    setFormState({ ...formState, [field]: value });
  };

  const getValidationError = (field: keyof FormState): string => {
    const { name, lastname, email, password, confirmPassword } = formState;
    switch (field) {
      case 'name':
        return name ? '' : `Can't be empty`;
      case 'lastname':
        return lastname ? '' : `Can't be empty`;
      case 'email':
        return emailValidation(email);
      case 'password':
        return passwordValidation(password);
      case 'confirmPassword':
        return confirmPassword === password ? '' : 'Passwords do not match';
      default:
        return '';
    }
  };

  const validateInput = (field: keyof FormState) => {
    const error = getValidationError(field);
    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
  };

  const validateAllInputs = () => {
    const newErrors = Object.keys(formState).reduce((acc, field) => {
      const error = getValidationError(field as keyof FormState);
      return { ...acc, [field]: error };
    }, {} as { [key: string]: string });
    setErrors(newErrors);
  };

  const canProceedSignUp = () => {
    return (
      Object.values(formState).every((value) => value !== '') &&
      Object.values(errors).every((error) => error === '')
    );
  };

  const canProceedLogin = () => {
    const { email, password } = formState;
    return email !== '' && password !== '';
  };

  return {
    formState,
    updateInput,
    validateInput,
    validateAllInputs,
    canProceedSignUp,
    canProceedLogin,
    errors,
  };
};

export default useSignUpForm;
