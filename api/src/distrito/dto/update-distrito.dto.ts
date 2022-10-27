import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateDistritoDto } from './create-distrito.dto';

export class UpdateDistritoDto extends PartialType(CreateDistritoDto) {

    @ApiProperty()
    Id: number;
}
