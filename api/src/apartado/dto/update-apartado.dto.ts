import { PartialType } from '@nestjs/swagger';
import { CreateApartadoDto } from './create-apartado.dto';

export class UpdateApartadoDto extends PartialType(CreateApartadoDto) {
    Id: number;  
}
