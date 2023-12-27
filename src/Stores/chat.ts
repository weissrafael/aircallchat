import { create } from 'zustand';

import { ConversationResource } from 'Models/ConversationResource';

export interface ChatStoreResource {
  selectedConversation: ConversationResource;
  setSelectedConversation: (conversation: ConversationResource) => void;
  chatIsLoading: boolean;
  setChatIsLoading: (isLoading: boolean) => void;
  screenIsLoading: boolean;
  setScreenIsLoading: (isLoading: boolean) => void;
}

export const useChatStore = create<ChatStoreResource>((set) => ({
  selectedConversation: {
    _id: '',
    name: '',
    members: [{ _id: '', id: 1, name: '', lastSeenAt: '' }],
    lastMessage: { _id: '', userId: '', sentAt: '', text: '' },
  },
  setSelectedConversation: (conversation: ConversationResource) =>
    set(() => ({ selectedConversation: conversation })),
  chatIsLoading: false,
  setChatIsLoading: (isLoading: boolean) =>
    set(() => ({ chatIsLoading: isLoading })),
  screenIsLoading: false,
  setScreenIsLoading: (isLoading: boolean) =>
    set(() => ({ screenIsLoading: isLoading })),
}));
