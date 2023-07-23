import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ContactResource } from 'Models/ContactResource';

import { AWSUserAvatarUrl } from '../../Constants/AWS';
import useCurrentPage from '../../Hooks/useCurrentPage';
import { PagesEnum } from '../../Models/UserInterfaceResources';
import { useChatStore } from '../../Stores/chat';
import { useGroupStore } from '../../Stores/group';
import { formatTime } from '../../Utils/contact';

import {
  ActivityInfo,
  Card,
  ContactAvatar,
  LastSeenAt,
  UserName,
} from './styles';

interface Props {
  contact: ContactResource;
}

export default function ContactCard({ contact }: Props) {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const { id, name, lastSeenAt } = contact;
  const { activePage } = useCurrentPage.useCurrentPage();
  const navigate = useNavigate();
  const date = formatTime(lastSeenAt);
  const avatarUrl = AWSUserAvatarUrl + 'user' + id + '.png';
  const capitalName = name.charAt(0).toUpperCase() + name.slice(1);
  const selectUser = useChatStore((state) => state.selectUser);
  const { isGroupMode, addUser, selectedUsers, removeUser } = useGroupStore(
    (state) => state
  );
  const isForSelection = isGroupMode && activePage === PagesEnum.contacts;

  function handleClick() {
    navigate('/chat/' + id);
    selectUser(contact);
  }

  function handleSelectionClick() {
    if (isSelected) {
      removeUser(contact);
    } else {
      addUser(contact);
    }
  }

  useEffect(() => {
    setIsSelected(selectedUsers.includes(contact));
  }, [contact, isForSelection, selectedUsers]);

  return (
    <Card
      isSelected={isSelected}
      onClick={isForSelection ? handleSelectionClick : handleClick}
    >
      <ContactAvatar src={avatarUrl} />
      <ActivityInfo>
        <UserName isSelected={isSelected}>{capitalName}</UserName>
        {activePage === PagesEnum.inbox && <LastSeenAt>{date}</LastSeenAt>}
      </ActivityInfo>
    </Card>
  );
}
