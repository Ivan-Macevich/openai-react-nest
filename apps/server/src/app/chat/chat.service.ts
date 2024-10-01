import { Injectable } from '@nestjs/common';
import { ChatRepository } from './chat.repository';
import { ChatDto } from 'shared/dto/chat.request';

@Injectable()
export class ChatService {
  constructor(private readonly chatRepo: ChatRepository) {}

  async saveMessage(message: ChatDto) {
    return this.chatRepo.saveMessages(message);
  }

  async getChatHistoty() {
    return this.chatRepo.getAllMessages();
  }
}
