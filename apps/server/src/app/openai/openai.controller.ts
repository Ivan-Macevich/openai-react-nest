import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { ChatRequest } from 'shared/dto/chat.request';
import { OpenaiService } from './openai.service';
import { ChatService } from '@app/chat/chat.service';
import { Role } from '@prisma/client';

@Controller('openai')
export class OpenaiController {
  constructor(
    private readonly openaiService: OpenaiService,
    private readonly chatService: ChatService,
  ) {}

  @Post('chat')
  async createChatCompletion(@Body() body: ChatRequest) {
    try {
      const response = await this.openaiService.createChatCompletion(
        body.messages,
      );

      if (!response) {
        throw new BadRequestException('Invalid response from AI');
      }

      await this.chatService.saveMessage({
        content: body.messages[0]?.content,
        role: Role.USER,
      });

      await this.chatService.saveMessage({
        content: response.choices[0]?.message.content,
        role: Role.ASSISTANT,
      });

      return response;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get('chat')
  async getAllMessages() {
    try {
      const messages = await this.chatService.getChatHistoty();
      return messages;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
