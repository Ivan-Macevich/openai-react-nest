import { Injectable } from '@nestjs/common';
import { PrismaService } from '@libs/prisma/prisma.service';
import { Role } from '@prisma/client';
import { ChatDto } from 'shared/dto/chat.request';
@Injectable()
export class ChatRepository {
  constructor(private readonly prisma: PrismaService) {}

  async saveMessages(message: ChatDto) {
    await this.prisma.message.create({
      data: {
        content: message.content,
        role: message.role as Role,
      },
    });
  }

  async getAllMessages() {
    return await this.prisma.message.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });
  }
}
