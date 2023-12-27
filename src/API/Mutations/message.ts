import { axiosRequest } from 'API/axiosInstance';
import { MessageResource } from 'Models/MessageResource';

export const createMessage = async (
  conversationId: string,
  text: string,
  _id: string
) => {
  const response = await axiosRequest.post<MessageResource>(
    `/user/${_id}/conversation/${conversationId}/message`,
    {
      text,
    }
  );
  return response.data;
};
