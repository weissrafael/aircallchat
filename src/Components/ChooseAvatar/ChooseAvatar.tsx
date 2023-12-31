import React from 'react';

import { AWSUserAvatarUrl } from 'Constants/AWS';

import { AvatarImage, Container } from './styles';

interface Props {
  setSelectedAvatar: (avatar: number) => void;
  selectedAvatar: number;
}

export default function ChooseAvatar({
  setSelectedAvatar,
  selectedAvatar,
}: Props) {
  const urls = [1, 4, 5, 11, 14, 15, 2, 8, 9, 17, 18, 12, 3, 7, 10, 13, 16, 6];

  return (
    <Container>
      {urls.map((url) => (
        <AvatarImage
          key={url}
          src={AWSUserAvatarUrl + 'user' + url + '.png'}
          onClick={() => setSelectedAvatar(url)}
          isSelected={selectedAvatar === url}
        />
      ))}
    </Container>
  );
}
