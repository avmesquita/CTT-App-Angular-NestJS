import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateConcelhoDto } from './create-concelho.dto';

export class UpdateConcelhoDto extends PartialType(CreateConcelhoDto) {

    @ApiProperty()
    Id: number;
}
