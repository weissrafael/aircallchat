export const emailValidation = (
  email: string,
  setEmailError: (value: string) => void
) => {
  if (email === '') {
    setEmailError('E-mail cannot be empty');
  } else if (!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    setEmailError('Please enter a valid email address');
  } else {
    setEmailError('');
  }
};

export const passwordValidation = (
  password: string,
  setPasswordError: (value: string) => void
) => {
  if (password === '') {
    setPasswordError('Password cannot be empty');
  } else if (password.length < 8) {
    setPasswordError('Password must be at least 8 characters long');
  } else {
    setPasswordError('');
  }
};
