import React, { useEffect, useRef } from 'react';

import { ContactResource } from 'Models/ContactResource';
import { MessageResource } from 'Models/MessageResource';
import { useChatStore } from 'Stores/chat';

import Message from '../Message/Message';
import MessageLoader from '../MessageLoader/Message';

import { ChatBody } from './styles';

interface Props {
  messages?: MessageResource[];
  members?: ContactResource[];
}

export default function ChatWindow({ messages, members }: Props) {
  const bottomRef = useRef<any>(null);
  const chatIsLoading = useChatStore((state) => state.chatIsLoading);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, chatIsLoading]);

  return (
    <ChatBody>
      {messages?.map((message) => {
        return (
          <Message key={message._id} members={members} message={message} />
        );
      })}
      {chatIsLoading && <MessageLoader />}
      <div ref={bottomRef} />
    </ChatBody>
  );
}
