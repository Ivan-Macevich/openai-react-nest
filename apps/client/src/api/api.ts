import { ChatCompletionMessage } from '../types/chat-message.interface';

export async function createChatCompletion(messages: ChatCompletionMessage[]) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/openai/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages,
    }),
  });
  return response.json();
}

export async function getChat() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/openai/chat`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
}
