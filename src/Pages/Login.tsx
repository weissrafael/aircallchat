import { useMutation } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { loginContact } from 'API/Mutations/contact';
import FullScreenLoader from 'Components/FullscreenLoader/FullScreenLoader';
import RoundButton from 'Components/RoundButton/RoundButton';
import SiteLogo from 'Components/SiteLogo/SiteLogo';
import useForm from 'Hooks/useForm';
import { useLoggedUser } from 'Stores/loggedUser';
import { LoginContainer, LoginInput, Space } from 'Styles/login.styles';
import { spacing } from 'Styles/styleGuide';

const Login: React.FC = () => {
  const { formState, updateInput, validateInput, canProceedLogin, errors } =
    useForm();
  const navigate = useNavigate();
  const { setLoggedUser, setToken } = useLoggedUser((state) => state);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/inbox');
    }
  }, [navigate]);

  const { mutate, isLoading } = useMutation(
    async () => {
      return await loginContact(formState.email, formState.password);
    },
    {
      onSuccess: (data) => {
        const { token, user } = data;
        setLoggedUser(user);
        setToken(token);
        navigate('/inbox');
      },
      onError: () => {
        // Handle error
      },
    }
  );

  const handleLogin = () => {
    validateInput('email');
    validateInput('password');
    if (canProceedLogin()) {
      mutate();
    }
  };

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      handleLogin();
    }
  }

  return (
    <LoginContainer>
      <SiteLogo />
      <LoginInput
        label="E-mail"
        value={formState.email}
        onChange={(e) => updateInput('email', e.target.value)}
        helperText={errors.email}
        error={!!errors.email}
        type="email"
        onKeyUp={handleKeyPress}
        onBlur={() => validateInput('email')}
      />
      <LoginInput
        type="password"
        label="Password"
        value={formState.password}
        onChange={(e) => updateInput('password', e.target.value)}
        helperText={errors.password}
        error={!!errors.password}
        onKeyUp={handleKeyPress}
        onBlur={() => validateInput('password')}
      />
      <Space />
      <RoundButton
        style={{ width: '100%', marginBottom: spacing.small }}
        onClick={handleLogin}
        variant="primary"
        size="big"
        disabled={!!errors.email || !!errors.password || isLoading}
      >
        Login
      </RoundButton>
      <RoundButton
        style={{ width: '100%', marginBottom: spacing.small }}
        onClick={() => navigate('/signup')}
        variant="secondary"
        size="big"
      >
        Sign Up
      </RoundButton>
      <FullScreenLoader isLoading={isLoading} />
    </LoginContainer>
  );
};

export default React.memo(Login);
