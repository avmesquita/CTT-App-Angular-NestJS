import { Module } from '@nestjs/common';
import { CodigoPostalService } from './codigo-postal.service';
import { CodigoPostalController } from './codigo-postal.controller';
import { CodigoPostal } from './entities/codigo-postal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([CodigoPostal])
  ],
  controllers: [CodigoPostalController],
  providers: [CodigoPostalService]
})
export class CodigoPostalModule {}
