import { Module } from '@nestjs/common';
import { OpenaiController } from './openai.controller';
import { OpenaiService } from './openai.service';
import OpenAI from 'openai';
import { ConfigService } from '@nestjs/config';
import { ChatModule } from '@app/chat/chat.module';

@Module({
  controllers: [OpenaiController],
  imports: [ChatModule],
  providers: [
    OpenaiService,
    {
      provide: OpenAI,
      useFactory: (configService: ConfigService) =>
        new OpenAI({ apiKey: configService.get('openai.apiKey') }),
      inject: [ConfigService],
    },
  ],
})
export class OpenaiModule {}
