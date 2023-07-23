import { create } from 'zustand';

import { ContactResource } from '../Models/ContactResource';
import { MessageResource } from '../Models/MessageResource';

export interface ChatStoreResource {
  selectedUser: ContactResource;
  chatIsLoading: boolean;
  messages: MessageResource[];
  members: ContactResource[];
  selectUser: (user: ContactResource) => void;
  addMessage: (message: MessageResource) => void;
  addMessages: (messages: MessageResource[]) => void;
  setChatIsLoading: (isLoading: boolean) => void;
  setMembers: (members: ContactResource[]) => void;
}

export const useChatStore = create<ChatStoreResource>((set) => ({
  selectedUser: { id: 1, name: '', lastSeenAt: '' },
  chatIsLoading: false,
  messages: [],
  members: [],
  setMembers: (members: ContactResource[]) => set(() => ({ members })),
  setChatIsLoading: (isLoading: boolean) =>
    set(() => ({ chatIsLoading: isLoading })),
  addMessage: (message: MessageResource) =>
    set((state) => ({ messages: [...state.messages, message] })),
  addMessages: (messages: MessageResource[]) =>
    set((state) => ({ messages: [...state.messages, ...messages] })),
  selectUser: (user: ContactResource) => set(() => ({ selectedUser: user })),
}));
