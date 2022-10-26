import { Module } from '@nestjs/common';
import { ConcelhoService } from './concelho.service';
import { ConcelhoController } from './concelho.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Concelho } from './entities/concelho.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Concelho])
  ],
  controllers: [ConcelhoController],
  providers: [ConcelhoService]
})
export class ConcelhoModule {}
