export const emailValidation = (email: string) => {
  if (email === '') {
    return 'E-mail cannot be empty';
  } else if (!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    return 'Please enter a valid email address';
  } else {
    return '';
  }
};

export const passwordValidation = (password: string) => {
  if (password === '') {
    return 'Password cannot be empty';
  } else if (password.length < 8) {
    return 'Password must be at least 8 characters long';
  } else {
    return '';
  }
};
