import { useEffect, useState } from 'react';

import {
  useFetchConversation,
  useFetchConversations,
} from 'API/Queries/conversation';
import { ConversationResource } from 'Models/ConversationResource';

const useGetConversations = () => {
  const { data, isLoading, isError, isFetching } = useFetchConversations();

  const [formattedData, setFormattedData] = useState<ConversationResource[]>(
    []
  );

  function compareDates(a: ConversationResource, b: ConversationResource) {
    const dateA = new Date(a.lastMessage?.sentAt || 0);
    const dateB = new Date(b.lastMessage?.sentAt || 0);
    return dateB.getTime() - dateA.getTime();
  }

  useEffect(() => {
    if (data && data.length > 0) {
      const newData = [...data];
      newData.sort(compareDates);
      setFormattedData(newData);
    }
  }, [data]);

  return {
    isLoading,
    isError,
    isFetching,
    data: formattedData,
  };
};

const useGetSingleConversation = (id: string) => {
  const { data, isLoading, isError } = useFetchConversation(id);

  return {
    isLoading,
    isError,
    data,
  };
};

export default { useGetConversations, useGetSingleConversation };
