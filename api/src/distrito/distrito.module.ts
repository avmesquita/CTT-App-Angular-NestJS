import { Module } from '@nestjs/common';
import { DistritoService } from './distrito.service';
import { DistritoController } from './distrito.controller';
import { Distrito } from './entities/distrito.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Distrito])
  ],
  controllers: [DistritoController],
  providers: [DistritoService]
})
export class DistritoModule {}
