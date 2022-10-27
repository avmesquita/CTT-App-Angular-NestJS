import { Module } from '@nestjs/common';
import { ApartadoService } from './apartado.service';
import { ApartadoController } from './apartado.controller';
import { Apartado } from './entities/apartado.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CodigoPostal } from 'src/codigo-postal/entities/codigo-postal.entity';
import { ConcelhoModule } from 'src/concelho/concelho.module';
import { DistritoModule } from 'src/distrito/distrito.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Apartado])
  ],
  controllers: [ApartadoController],
  providers: [ApartadoService]
})
export class ApartadoModule {}
