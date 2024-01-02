import { axiosRequest } from 'API/axiosInstance';
import {
  ContactCreationResource,
  ContactResource,
} from 'Models/ContactResource';

interface ContactTokenResponse {
  token: string;
  user: ContactResource;
}

interface CreateContactMutationArgs {
  contact: ContactCreationResource;
  email: string;
  password: string;
}

export const createNewContact = async ({
  contact,
  email,
  password,
}: CreateContactMutationArgs) => {
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
