import { ContactResource } from './ContactResource';
import { MessageResource } from './MessageResource';

export interface ConversationResource {
  id: number;
  name: string;
  members: ContactResource[];
  lastMessage: MessageResource;
}
