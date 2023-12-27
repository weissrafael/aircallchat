import { ContactResource } from './ContactResource';
import { MessageResource } from './MessageResource';

export interface ConversationResource {
  _id: string;
  name: string;
  members: ContactResource[];
  lastMessage: MessageResource;
}
