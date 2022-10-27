import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateApartadoDto } from './create-apartado.dto';

export class UpdateApartadoDto extends PartialType(CreateApartadoDto) {

    @ApiProperty()
    Id: number;  
}
