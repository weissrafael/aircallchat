import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { ContactResource } from 'Models/ContactResource';

export interface LoggedUserResource {
  loggedUser: ContactResource;
  token: string;
  setLoggedUser: (user: ContactResource) => void;
  setToken: (token: string) => void;
}

export const useLoggedUser = create(
  persist<LoggedUserResource>(
    (set) => ({
      loggedUser: {
        _id: '',
        lastname: '',
        name: '',
        lastSeenAt: '',
        imageUrl: '',
      },
      token: '',
      setToken: (token: string) => set({ token }),
      setLoggedUser: (user: ContactResource) => set({ loggedUser: user }),
    }),
    {
      name: 'logged-user',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
