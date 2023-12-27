import { useQuery } from '@tanstack/react-query';

import { axiosRequest } from 'API/axiosInstance';
import { QueryKeys } from 'API/QueryKeys';
import { ConversationResource } from 'Models/ConversationResource';
import { useLoggedUser } from 'Stores/loggedUser';

export const useFetchConversations = () => {
  const { loggedUser } = useLoggedUser((state) => state);
  return useQuery(
    [QueryKeys.conversationList],
    async () => {
      const response = await axiosRequest.get<ConversationResource[]>(
        `/user/${loggedUser._id}/conversation`
      );
      return response.data;
    },
    { refetchOnWindowFocus: false, refetchInterval: 5000 }
  );
};

export const useFetchConversation = (id: string) => {
  const { loggedUser } = useLoggedUser((state) => state);
  return useQuery([QueryKeys.conversation + id], async () => {
    const response = await axiosRequest.get<ConversationResource>(
      `/user/${loggedUser._id}/conversation/${id}`
    );
    return response.data;
  });
};
