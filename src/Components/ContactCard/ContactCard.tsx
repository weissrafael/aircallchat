import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ContactResource } from 'Models/ContactResource';

import { AWSUserAvatarUrl } from '../../Constants/AWS';
import { formatTime } from '../../Utils/contact';

import {
  Card,
  ContactAvatar,
  ActivityInfo,
  UserName,
  LastSeenAt,
} from './styles';

interface Props {
  contact: ContactResource;
}

export default function ContactCard({ contact }: Props) {
  const { id, name, lastSeenAt } = contact;
  const navigate = useNavigate();
  const date = formatTime(lastSeenAt);
  const avatarUrl = AWSUserAvatarUrl + 'user' + id + '.png';
  const capitalName = name.charAt(0).toUpperCase() + name.slice(1);

  function handleClick() {
    navigate('/chat/' + id);
  }

  return (
    <Card onClick={handleClick}>
      <ContactAvatar src={avatarUrl} />
      <ActivityInfo>
        <UserName>{capitalName}</UserName>
        <LastSeenAt>{date}</LastSeenAt>
      </ActivityInfo>
    </Card>
  );
}
