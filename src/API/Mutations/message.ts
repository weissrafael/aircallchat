import { axiosRequest } from 'API/axiosInstance';

import { MessageResource } from '../../Models/MessageResource';

export const createMessage = async (
  conversationId: number,
  text: string,
  id: string | number
) => {
  const response = await axiosRequest.post<MessageResource>(
    `/user/${id}/conversation/${conversationId}/message`,
    {
      text,
    }
  );
  return response.data;
};
