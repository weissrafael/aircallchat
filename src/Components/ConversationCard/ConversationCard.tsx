import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AWSUserAvatarUrl } from 'Constants/AWS';
import { ConversationResource } from 'Models/ConversationResource';
import { useChatStore } from 'Stores/chat';
import { useLoggedUser } from 'Stores/loggedUser';
import { formatTime } from 'Utils/contact';

import {
  ActivityInfo,
  Card,
  ContactAvatar,
  GroupAvatar,
  LastSeenAt,
  MessageDate,
  TopRow,
  UserName,
} from './styles';

interface Props {
  conversation: ConversationResource;
}

export default function ConversationCard({ conversation }: Props) {
  const { _id, name, members, lastMessage } = conversation;
  const { loggedUser } = useLoggedUser((state) => state);
  const { text, sentAt } = lastMessage;
  const contact = members.find((member) => member._id !== loggedUser._id);
  const isGroup = members && members?.length > 2;
  const navigate = useNavigate();
  const date = formatTime(sentAt);
  const avatarUrl = AWSUserAvatarUrl + contact?.imageUrl;
  const targetName = isGroup ? name : contact?.name;
  const capitalName = targetName
    ? targetName.charAt(0).toUpperCase() + targetName?.slice(1)
    : 'Unknown';
  const { setSelectedConversation } = useChatStore((state) => state);

  function handleClick() {
    setSelectedConversation(conversation);
    navigate('/chat/' + _id);
  }

  return (
    <Card onClick={handleClick}>
      {isGroup ? (
        <GroupAvatar>{capitalName ? capitalName.charAt(0) : 'U'}</GroupAvatar>
      ) : (
        <ContactAvatar height="60" width="60" loading="lazy" src={avatarUrl} />
      )}
      <ActivityInfo>
        <TopRow>
          <UserName>{capitalName}</UserName>
          <MessageDate>{sentAt ? date : ''}</MessageDate>
        </TopRow>
        <LastSeenAt>{text ? text : 'new chat'}</LastSeenAt>
      </ActivityInfo>
    </Card>
  );
}
