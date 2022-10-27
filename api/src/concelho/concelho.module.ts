import { Module } from '@nestjs/common';
import { ConcelhoService } from './concelho.service';
import { ConcelhoController } from './concelho.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Concelho } from './entities/concelho.entity';
import { DistritoModule } from 'src/distrito/distrito.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Concelho]),
    DistritoModule
  ],
  controllers: [ConcelhoController],
  providers: [ConcelhoService]
})
export class ConcelhoModule {}
