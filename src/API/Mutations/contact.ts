import { axiosRequest } from 'API/axiosInstance';
import { ContactResource } from 'Models/ContactResource';

export const createNewContact = async (
  contact: ContactResource,
  email: string,
  password: string
) => {
  const response = await axiosRequest.post<ContactResource>(`/signup`, {
    ...contact,
    email,
    password,
  });
  return response.data;
};
