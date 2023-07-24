import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createConversation } from '../API/Mutations/conversation';
import ContactCard from '../Components/ContactCard/ContactCard';
import RoundButton from '../Components/RoundButton/RoundButton';
import { useChatStore } from '../Stores/chat';
import { useGroupStore } from '../Stores/group';
import { useLoggedUser } from '../Stores/loggedUser';
import { CardList } from '../Styles/common.styles';
import { LoginInput, Space } from '../Styles/login.styles';

export default function CreateGroup() {
  const { selectedUsers, reset } = useGroupStore((state) => state);
  const { loggedUser } = useLoggedUser((state) => state);
  const { setScreenIsLoading } = useChatStore((state) => state);
  const usersIds = selectedUsers.map((item) => item.id);
  const [text, setText] = useState<string>('');
  const navigate = useNavigate();

  const mutateCreateConversation = useMutation(
    async () => {
      setScreenIsLoading(true);
      return await createConversation(usersIds, text, loggedUser.id);
    },
    {
      onSuccess: (data) => {
        const { id } = data.data;
        navigate(`/chat/${id}`);
        setText('');
        setScreenIsLoading(false);
        reset();
      },
      onError: () => {
        setScreenIsLoading(false);
      },
    }
  );

  function handleCreateGroup() {
    mutateCreateConversation.mutate();
  }

  return (
    <>
      <LoginInput
        id="outlined-basic"
        label="Group Name"
        color="success"
        variant="outlined"
        placeholder="Type Group Name..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Space />
      <RoundButton
        style={{
          width: '100%',
          height: 50,
          fontSize: 16,
        }}
        disabled={!text}
        onClick={handleCreateGroup}
      >
        Create Group
      </RoundButton>
      <Space />
      <Space />
      <CardList>
        {selectedUsers.map((item) => (
          <ContactCard key={item.id} contact={item} />
        ))}
      </CardList>
    </>
  );
}
