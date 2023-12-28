import { axiosRequest } from 'API/axiosInstance';
import { ContactResource } from 'Models/ContactResource';

interface ContactTokenResponse {
  token: string;
  user: ContactResource;
}

export const createNewContact = async (
  contact: ContactResource,
  email: string,
  password: string
) => {
  const response = await axiosRequest.post<ContactTokenResponse>(`/signup`, {
    ...contact,
    email,
    password,
  });
  return response.data;
};

export const loginContact = async (email: string, password: string) => {
  const response = await axiosRequest.post<ContactTokenResponse>(`/login`, {
    email,
    password,
  });
  return response.data;
};
