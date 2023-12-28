import React from 'react';

import { AWSUserAvatarUrl } from 'Constants/AWS';
import { ContactResource } from 'Models/ContactResource';
import { MessageResource } from 'Models/MessageResource';
import { useLoggedUser } from 'Stores/loggedUser';

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
  const membersIds = members?.map((member) => member._id);
  const { loggedUser } = useLoggedUser((state) => state);
  const isFromOtherUser = message?.userId !== loggedUser._id;
  const isGroup = membersIds && membersIds?.length > 2;
  const messageOwner = members?.find(
    (member) => member._id === message?.userId
  );
  const capitalName = messageOwner
    ? messageOwner.name.charAt(0).toUpperCase() + messageOwner.name.slice(1)
    : '';
  const avatarUrl = AWSUserAvatarUrl + messageOwner?.imageUrl;
  return (
    <MessageBody isFromOtherUser={isFromOtherUser}>
      <MessageContent isGroup={isGroup} isFromOtherUser={isFromOtherUser}>
        {isGroup && isFromOtherUser ? (
          <>
            <ChatAvatar src={avatarUrl} />
            <InfoContainer>
              <MemberName>{capitalName}</MemberName>
              <MessageText>{message?.text}</MessageText>
            </InfoContainer>
          </>
        ) : (
          message?.text
        )}
      </MessageContent>
    </MessageBody>
  );
}
