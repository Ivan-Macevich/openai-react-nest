import { createChatCompletion, getChat } from '@/api/api';
import ChatWindow from '@/components/chat-window.component';
import { ChatCompletionMessage, Role } from '@/types/chat-message.interface';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useEffect, useState } from 'react';

const ChatLayout = () => {
  const [messages, setMessages] = useState<ChatCompletionMessage[]>([]);
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleMessage = async () => {
    const updatedMessages = [
      ...messages,
      {
        role: Role.USER,
        content: message,
      },
    ];
    setMessages(updatedMessages);
    setMessage('');

    try {
      const response = (await createChatCompletion(updatedMessages)).choices[0]
        ?.message;
      if (!response) {
        throw new Error('Invalid response from API');
      }
      setMessages([...updatedMessages, response]);
    } catch {
      setMessages((prevMessages) => prevMessages.slice(0, -1));
      setError('Something went wrong while fetching the response.');
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const chatHistory = async () => {
      try {
        const response = await getChat();
        if (response) {
          setMessages(response);
        }
      } catch {
        setError('Something went wrong while fetching chat history.');
        setIsModalOpen(true);
      }
    };
    chatHistory();
  }, []);

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box sx={{ flex: 1 }}>
        <ChatWindow
          handleMessage={handleMessage}
          message={message}
          messages={messages}
          setMessage={setMessage}
        />
      </Box>

      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="error-dialog-title"
        aria-describedby="error-dialog-description"
      >
        <DialogTitle id="error-dialog-title">Error</DialogTitle>
        <DialogContent>
          <DialogContentText id="error-dialog-description">
            {error}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ChatLayout;
