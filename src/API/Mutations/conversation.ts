import { axiosRequest } from 'API/axiosInstance';

import { ConversationResource } from '../../Models/ConversationResource';

export const createConversation = async (
  userIds: number[],
  name: string,
  id: number | string
) => {
  console.log('createConversation:', userIds, name, id);
  const response = await axiosRequest.post<ConversationResource>(
    `/user/${id}/conversation`,
    {
      userIds,
      name,
    }
  );
  return response.data;
};
