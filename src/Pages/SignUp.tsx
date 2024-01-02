import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createNewContact } from 'API/Mutations/contact';
import AvatarSelection from 'Components/AvatarSelection/AvatarSelection';
import FullScreenLoader from 'Components/FullscreenLoader/FullScreenLoader';
import SignUpForm from 'Components/SignUpForm/SignUpForm';
import SiteLogo from 'Components/SiteLogo/SiteLogo';
import useSignUpForm from 'Hooks/useSignUpForm';
import { useLoggedUser } from 'Stores/loggedUser';
import { SignUpContainer } from 'Styles/signUp.styles';

import { ContactResource } from '../Models/ContactResource';

const DEFAULT_AVATAR = 1;

const SignUp: React.FC = () => {
  const [chooseAvatarMode, setChooseAvatarMode] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(DEFAULT_AVATAR);
  const { setToken, setLoggedUser } = useLoggedUser((state) => state);
  const navigate = useNavigate();

  const { formState, updateInput, validateInput, canProceed, errors } =
    useSignUpForm();

  const { mutate, isLoading } = useMutation(createNewContact, {
    onSuccess: (data: { token: string; user: ContactResource }) => {
      const { token, user } = data;
      setToken(token);
      setLoggedUser(user);
      navigate('/inbox');
    },
    onError: (error: any) => {
      // Replace 'any' with the appropriate error type
      // Handle error appropriately
    },
  });

  const handleContinue = () => {
    if (canProceed()) setChooseAvatarMode(true);
  };

  const CreateNewAccount = () => {
    const { name, lastname, email, password } = formState;
    mutate({
      contact: {
        imageUrl: `user${selectedAvatar}.png`,
        name: name,
        lastname: lastname,
      },
      email: email,
      password: password,
    });
  };

  return (
    <SignUpContainer>
      <SiteLogo />
      {chooseAvatarMode ? (
        <AvatarSelection
          selectedAvatar={selectedAvatar}
          setSelectedAvatar={setSelectedAvatar}
          CreateNewAccount={CreateNewAccount}
          goBack={() => setChooseAvatarMode(false)}
        />
      ) : (
        <SignUpForm
          formState={formState}
          errors={errors}
          updateInput={updateInput}
          validateInput={validateInput}
          handleContinue={handleContinue}
          goBack={() => navigate('/')}
        />
      )}
      <FullScreenLoader isLoading={isLoading} />
    </SignUpContainer>
  );
};

export default SignUp;
