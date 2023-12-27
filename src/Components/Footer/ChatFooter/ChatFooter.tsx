import SendIcon from '@mui/icons-material/Send';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';

import { createMessage } from 'API/Mutations/message';
import RoundButton from 'Components/RoundButton/RoundButton';
import useMessages from 'Hooks/useMessages';
import { useChatStore } from 'Stores/chat';
import { useLoggedUser } from 'Stores/loggedUser';
import { ScreenLimiter } from 'Styles/common.styles';

import { ButtonContainer, ChatFooterContainer, MessageInput } from '../styles';

function ChatFooter() {
  const [text, setText] = useState('');
  const { loggedUser } = useLoggedUser((state) => state);
  const { selectedConversation, setChatIsLoading } = useChatStore(
    (state) => state
  );
  const { refetch } = useMessages.useGetMessage(selectedConversation._id);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const mutateCreateConversation = useMutation(
    async () => {
      setChatIsLoading(true);
      return await createMessage(
        selectedConversation._id,
        text,
        loggedUser._id
      );
    },
    {
      onSuccess: () => {
        setText('');
        refetch();
      },
      onError: () => {
        setText('');
      },
    }
  );
  const { isLoading } = mutateCreateConversation;

  const handleSend = () => {
    mutateCreateConversation.mutate();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (text.trim() !== '') {
        handleSend();
      }
    }
  };

  return (
    <footer>
      <ChatFooterContainer>
        <ScreenLimiter>
          <MessageInput
            onChange={handleChange}
            value={text}
            placeholder="Type a message..."
            multiline
            onKeyPress={handleKeyPress}
            label="Message"
            inputProps={{ maxLength: 500 }}
          />
          <ButtonContainer>
            <RoundButton
              disabled={!text || isLoading}
              variant="primaryDark"
              style={{
                height: 46,
                width: 46,
              }}
              onClick={handleSend}
            >
              <SendIcon />
            </RoundButton>
          </ButtonContainer>
        </ScreenLimiter>
      </ChatFooterContainer>
    </footer>
  );
}

export default React.memo(ChatFooter);
