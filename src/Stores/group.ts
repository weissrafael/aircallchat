import { create } from 'zustand';

import { ContactResource } from 'Models/ContactResource';

export interface ChatGroupResource {
  isGroupMode: boolean;
  setIsGroupMode: (isLoading: boolean) => void;
  selectedUsers: ContactResource[];
  usersAvailable: ContactResource[];
  setUsersAvailable: (users: ContactResource[]) => void;
  addUser: (user: ContactResource) => void;
  removeUser: (user: ContactResource) => void;
  reset: () => void;
}

export const useGroupStore = create<ChatGroupResource>((set) => ({
  isGroupMode: false,
  selectedUsers: [],
  usersAvailable: [],
  setUsersAvailable: (users: ContactResource[]) =>
    set(() => ({ usersAvailable: users })),
  reset: () =>
    set(() => {
      return { isGroupMode: false, selectedUsers: [] };
    }),
  removeUser: (user: ContactResource) => {
    set((state) => ({
      selectedUsers: state.selectedUsers.filter((u) => u._id !== user._id),
    }));
  },
  addUser: (user: ContactResource) =>
    set((state) => ({ selectedUsers: [...state.selectedUsers, user] })),
  setIsGroupMode: (isGroupMode: boolean) => set(() => ({ isGroupMode })),
}));
