import { Module } from '@nestjs/common';
import { CodigoPostalService } from './codigo-postal.service';
import { CodigoPostalController } from './codigo-postal.controller';
import { CodigoPostal } from './entities/codigo-postal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConcelhoModule } from 'src/concelho/concelho.module';
import { DistritoModule } from 'src/distrito/distrito.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CodigoPostal]),
    ConcelhoModule,
    DistritoModule
  ],
  controllers: [CodigoPostalController],
  providers: [CodigoPostalService]
})
export class CodigoPostalModule {}
