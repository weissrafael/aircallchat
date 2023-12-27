import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import React from 'react';

import { AWSUserAvatarUrl } from 'Constants/AWS';
import { useChatStore } from 'Stores/chat';
import { useLoggedUser } from 'Stores/loggedUser';
import { ScreenLimiterChat } from 'Styles/common.styles';
import { formatTime } from 'Utils/contact';

import {
  HeaderChatContainer,
  InfoContainer,
  TopLeftTabButton,
  UserName,
  ChatContactAvatar,
  LastSeenAt,
} from '../styles';

function ChatHeader() {
  const { name, members, lastMessage } = useChatStore(
    (state) => state.selectedConversation
  );
  const { sentAt } = lastMessage || { sentAt: '' };
  const { loggedUser } = useLoggedUser((state) => state);
  const { _id } = loggedUser;
  const { id } = members?.find((member) => member._id !== _id) || { id: '' };
  const isGroup = members && members?.length > 2;
  const date = formatTime(sentAt);
  const capitalName = name.charAt(0).toUpperCase() + name.slice(1);
  const avatarUrl = AWSUserAvatarUrl + 'user' + id + '.png';

  return (
    <HeaderChatContainer>
      <ScreenLimiterChat>
        <UserName isGroup={isGroup}>{capitalName}</UserName>
        {!isGroup && <LastSeenAt>{date}</LastSeenAt>}
        <TopLeftTabButton to="/inbox">
          <ArrowCircleLeftIcon />
        </TopLeftTabButton>
        <InfoContainer>
          {!isGroup && <ChatContactAvatar src={avatarUrl} />}
        </InfoContainer>
      </ScreenLimiterChat>
    </HeaderChatContainer>
  );
}

export default React.memo(ChatHeader);
