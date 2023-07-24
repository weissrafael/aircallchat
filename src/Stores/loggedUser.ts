import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { ContactResource } from 'Models/ContactResource';

export interface LoggedUserResource {
  loggedUser: ContactResource;
  setLoggedUser: (user: ContactResource) => void;
}

export const useLoggedUser = create(
  persist<LoggedUserResource>(
    (set) => ({
      loggedUser: { id: 0, name: '', lastSeenAt: '' },
      setLoggedUser: (user: ContactResource) => set({ loggedUser: user }),
    }),
    {
      name: 'logged-user',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
