import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateCodigoPostalDto } from './create-codigo-postal.dto';

export class UpdateCodigoPostalDto extends PartialType(CreateCodigoPostalDto) {

    @ApiProperty()
    Id: number;
}
