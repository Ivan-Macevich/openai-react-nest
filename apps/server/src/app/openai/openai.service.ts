import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources';
import { ChatDto } from 'shared/dto/chat.request';

@Injectable()
export class OpenaiService {
  constructor(
    private readonly openai: OpenAI,
    private readonly configService: ConfigService,
  ) {}

  async createChatCompletion(messages: ChatDto[]) {
    return this.openai.chat.completions.create({
      messages: messages as ChatCompletionMessageParam[],
      model: this.configService.get('openai.gpt_version'),
    });
  }
}
