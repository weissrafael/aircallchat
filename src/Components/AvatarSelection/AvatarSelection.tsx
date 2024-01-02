import React from 'react';

import ChooseAvatar from 'Components/ChooseAvatar/ChooseAvatar';
import RoundButton from 'Components/RoundButton/RoundButton';
import { Space } from 'Styles/signUp.styles';
import { spacing } from 'Styles/styleGuide';

interface AvatarSelectionProps {
  selectedAvatar: number;
  setSelectedAvatar: (avatar: number) => void;
  CreateNewAccount: () => void;
  goBack: () => void;
}

const AvatarSelection: React.FC<AvatarSelectionProps> = ({
  selectedAvatar,
  setSelectedAvatar,
  CreateNewAccount,
  goBack,
}) => {
  return (
    <>
      <h1>Choose your avatar</h1>
      <Space />
      <ChooseAvatar
        selectedAvatar={selectedAvatar}
        setSelectedAvatar={setSelectedAvatar}
      />
      <Space />
      <RoundButton
        style={{ width: '100%', marginBottom: spacing.xsSmall }}
        onClick={CreateNewAccount}
        variant="primary"
        size="big"
      >
        Create Account
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

export default AvatarSelection;
