export enum Role {
  USER = 'USER',
  ASSISTANT = 'ASSISTANT',
}
export interface ChatCompletionMessage {
  role: Role;
  content: string;
}
