import { useState } from 'react';

import { FormState } from 'Models/ContactResource'; // Assumed external validation functions
import { emailValidation, passwordValidation } from 'Utils/inputValidation';

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

  const validateInput = (field: keyof FormState) => {
    let error = '';
    switch (field) {
      case 'name':
        error = formState.name ? '' : 'Name cannot be empty';
        break;
      case 'lastname':
        error = formState.lastname ? '' : 'Lastname cannot be empty';
        break;
      case 'email':
        error = emailValidation(formState.email);
        break;
      case 'password':
        error = passwordValidation(formState.password);
        break;
      case 'confirmPassword':
        error =
          formState.confirmPassword === formState.password
            ? ''
            : 'Passwords do not match';
        break;
      default:
        break;
    }
    setErrors({ ...errors, [field]: error });
  };

  const canProceed = () => {
    return (
      Object.values(formState).every((value) => value !== '') &&
      Object.values(errors).every((error) => error === '')
    );
  };

  return { formState, updateInput, validateInput, canProceed, errors };
};

export default useSignUpForm;
