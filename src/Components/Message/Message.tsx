import React from 'react';

import { mockedLoggedUser } from '../../API/mockedLoggedUser';
import { AWSUserAvatarUrl } from '../../Constants/AWS';
import { ContactResource } from '../../Models/ContactResource';
import { MessageResource } from '../../Models/MessageResource';
import { ContactAvatar } from '../ContactCard/styles';

import {
  ChatAvatar,
  InfoContainer,
  MemberName,
  MessageBody,
  MessageContent,
  MessageText,
} from './styles';

interface Props {
  message: MessageResource;
  members?: ContactResource[];
}

export default function Message({ message, members }: Props) {
  const membersIds = members?.map((member) => member.id);
  const isFromOtherUser = message?.userId !== mockedLoggedUser.id;
  const isGroup = membersIds?.length && membersIds?.length > 2;
  const messageOwner = members?.find((member) => member.id === message?.userId);
  const capitalName = messageOwner
    ? messageOwner.name.charAt(0).toUpperCase() + messageOwner.name.slice(1)
    : '';
  const avatarUrl = AWSUserAvatarUrl + 'user' + messageOwner?.id + '.png';
  if (isGroup && isFromOtherUser) {
    return (
      <MessageBody isFromOtherUser={isFromOtherUser}>
        <MessageContent isGroup={isGroup} isFromOtherUser={isFromOtherUser}>
          <ChatAvatar src={avatarUrl} />
          <InfoContainer>
            <MemberName>{capitalName}</MemberName>
            <MessageText>{message?.text}</MessageText>
          </InfoContainer>
        </MessageContent>
      </MessageBody>
    );
  }
  return (
    <MessageBody isFromOtherUser={isFromOtherUser}>
      <MessageContent isFromOtherUser={isFromOtherUser}>
        {message?.text}
      </MessageContent>
    </MessageBody>
  );
}
