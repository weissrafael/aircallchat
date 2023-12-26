import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ChatWindow from 'Components/ChatWindow/ChatWindow';
import EmptyState from 'Components/EmptyState/EmptyState';
import ErrorState from 'Components/ErrorState/ErrorState';
import FullScreenLoader from 'Components/FullscreenLoader/FullScreenLoader';
import useConversations from 'Hooks/useConversations';
import useMessages from 'Hooks/useMessages';
import { useChatStore } from 'Stores/chat';

function Chat() {
  const { id } = useParams();
  const {
    data: messageData,
    isError: messageError,
    isLoading: messageLoading,
  } = useMessages.useGetMessage(id || '');
  const { data, isLoading, isError } =
    useConversations.useGetSingleConversation(id || '');
  const { setChatIsLoading, setSelectedConversation, chatIsLoading } =
    useChatStore((state) => state);

  useEffect(() => {
    setChatIsLoading(false);
  }, [messageData, setChatIsLoading]);

  useEffect(() => {
    if (data?.id) setSelectedConversation(data);
  }, [data, setSelectedConversation]);

  if (isError || messageError) return <ErrorState />;
  else if (messageLoading || isLoading) return <FullScreenLoader isLoading />;
  else if (messageData.length === 0 && !chatIsLoading)
    return (
      <EmptyState
        title="No messages here!"
        subtitle="Type on the box bellow to start a conversation"
      />
    );
  else return <ChatWindow members={data?.members} messages={messageData} />;
}

export default React.memo(Chat);
