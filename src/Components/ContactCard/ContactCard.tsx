import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { createConversation } from 'API/Mutations/conversation';
import { AWSUserAvatarUrl } from 'Constants/AWS';
import useCurrentPage from 'Hooks/useCurrentPage';
import { ContactResource } from 'Models/ContactResource';
import { PagesEnum } from 'Models/UserInterfaceResources';
import { useChatStore } from 'Stores/chat';
import { useGroupStore } from 'Stores/group';
import { useLoggedUser } from 'Stores/loggedUser';

import { ActivityInfo, Card, ContactAvatar, UserName } from './styles';

interface Props {
  contact: ContactResource;
}

export default function ContactCard({ contact }: Props) {
  const { id, name } = contact;
  const { loggedUser } = useLoggedUser((state) => state);
  const { activePage } = useCurrentPage.useCurrentPage();
  const navigate = useNavigate();
  const avatarUrl = AWSUserAvatarUrl + 'user' + id + '.png';
  const capitalName = name.charAt(0).toUpperCase() + name.slice(1);
  const { isGroupMode, addUser, selectedUsers, removeUser } = useGroupStore(
    (state) => state
  );
  const { setScreenIsLoading } = useChatStore((state) => state);
  const isForSelection = isGroupMode && activePage === PagesEnum.contacts;
  const isSelected =
    isForSelection && selectedUsers.some((user) => user.id === id);

  const mutateCreateConversation = useMutation(
    async () => {
      setScreenIsLoading(true);
      return await createConversation([id], name, loggedUser.id);
    },
    {
      onSuccess: (data) => {
        setScreenIsLoading(false);
        goToChat(data.id);
      },
      onError: () => {
        setScreenIsLoading(false);
      },
    }
  );

  function goToChat(conversationId: number) {
    navigate('/chat/' + conversationId);
  }

  function handleClick() {
    if (activePage === PagesEnum.createGroup) return;
    if (mutateCreateConversation.isLoading) return;
    mutateCreateConversation.mutate();
  }

  function handleSelectionClick() {
    if (isSelected) {
      removeUser(contact);
    } else {
      addUser(contact);
    }
  }

  return (
    <Card
      isSelected={isSelected}
      onClick={isForSelection ? handleSelectionClick : handleClick}
    >
      <ContactAvatar height="60" width="60" loading="lazy" src={avatarUrl} />
      <ActivityInfo>
        <UserName isSelected={isSelected}>{capitalName}</UserName>
      </ActivityInfo>
    </Card>
  );
}
