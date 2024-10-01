import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './libs/prisma/prisma.module';
import config_app from 'configs/app.config';
import config_openai from 'configs/openai.config';
import { OpenaiModule } from '@app/openai/openai.module';
import { ChatModule } from '@app/chat/chat.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config_app, config_openai],
      isGlobal: true,
    }),
    PrismaModule,
    OpenaiModule,
    ChatModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
