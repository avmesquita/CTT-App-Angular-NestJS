import { Module } from '@nestjs/common';
import { ApartadoService } from './apartado.service';
import { ApartadoController } from './apartado.controller';
import { Apartado } from './entities/apartado.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Apartado])
  ],
  controllers: [ApartadoController],
  providers: [ApartadoService]
})
export class ApartadoModule {}
