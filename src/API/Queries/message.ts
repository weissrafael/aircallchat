import { useQuery } from '@tanstack/react-query';

import { axiosRequest } from 'API/axiosInstance';
import { QueryKeys } from 'API/QueryKeys';
import { MessageResource } from 'Models/MessageResource';
import { useLoggedUser } from 'Stores/loggedUser';

export const useFetchMessages = (id: string) => {
  const { loggedUser } = useLoggedUser((state) => state);

  return useQuery(
    [QueryKeys.messages + id],
    async () => {
      const response = await axiosRequest.get<MessageResource[]>(
        `/user/${loggedUser._id}/conversation/${id}/message`
      );
      return response.data;
    },
    {
      refetchInterval: 5000,
    }
  );
};
