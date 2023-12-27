import { useQuery } from '@tanstack/react-query';

import { axiosRequest } from 'API/axiosInstance';
import { QueryKeys } from 'API/QueryKeys';
import { ContactResource } from 'Models/ContactResource';

export const useFetchContacts = () => {
  return useQuery([QueryKeys.contactList], async () => {
    const response = await axiosRequest.get<ContactResource[]>(`/user`);
    return response.data;
  });
};
