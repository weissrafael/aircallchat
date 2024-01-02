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
    data: messagesData,
    isError: messagesError,
    isLoading: messagesLoading,
  } = useMessages.useGetMessages(id || '');
  const {
    data: conversationData,
    isLoading: conversationLoading,
    isError: conversationError,
  } = useConversations.useGetSingleConversation(id || '');
  const { setChatIsLoading, setSelectedConversation, chatIsLoading } =
    useChatStore((state) => state);

  useEffect(() => {
    setChatIsLoading(false);
  }, [messagesData, setChatIsLoading]);

  useEffect(() => {
    if (conversationData?._id) setSelectedConversation(conversationData);
  }, [conversationData, setSelectedConversation]);

  if (conversationError || messagesError) return <ErrorState />;
  else if (messagesLoading || conversationLoading)
    return <FullScreenLoader isLoading />;
  else if (messagesData.length === 0 && !chatIsLoading)
    return (
      <EmptyState
        title="No messages here!"
        subtitle="Type on the box bellow to start a conversation"
      />
    );
  else
    return (
      <ChatWindow members={conversationData?.members} messages={messagesData} />
    );
}

export default React.memo(Chat);
