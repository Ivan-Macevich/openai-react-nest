import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

export class ChatRequest {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChatDto)
  messages: ChatDto[];
}

export class ChatDto {
  @IsString()
  @IsNotEmpty()
  role: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
