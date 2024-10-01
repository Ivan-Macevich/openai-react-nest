import {
  Box,
  TextField,
  IconButton,
  Typography,
  Paper,
  Divider,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { ChatCompletionMessage, Role } from '@/types/chat-message.interface';

interface IChatWindow {
  message: string;
  setMessage: (message: string) => void;
  messages: ChatCompletionMessage[];
  handleMessage: () => void;
}

const ChatWindow: React.FC<IChatWindow> = ({
  message,
  setMessage,
  messages,
  handleMessage,
}) => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Paper elevation={2} sx={{ padding: '16px' }}>
        <Typography variant="h6">OpenAI Chat</Typography>
      </Paper>
      <Divider />
      <Box sx={{ flex: 1, padding: '16px', overflowY: 'auto' }}>
        {messages.map((msg, index) => (
          <Typography
            key={index}
            align={msg.role === Role.USER ? 'right' : 'left'}
          >
            <strong>{msg.role}: </strong> {msg.content}
          </Typography>
        ))}
      </Box>
      <Divider />
      <Box sx={{ display: 'flex', padding: '8px' }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <IconButton color="primary" onClick={handleMessage}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatWindow;
