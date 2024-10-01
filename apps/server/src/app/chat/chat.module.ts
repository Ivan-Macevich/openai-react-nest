import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { PrismaModule } from '@libs/prisma/prisma.module';
import { ChatRepository } from './chat.repository';

@Module({
  imports: [PrismaModule],
  providers: [ChatService, ChatRepository],
  exports: [ChatService],
})
export class ChatModule {}
