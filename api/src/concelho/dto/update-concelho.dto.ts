import { PartialType } from '@nestjs/swagger';
import { CreateConcelhoDto } from './create-concelho.dto';

export class UpdateConcelhoDto extends PartialType(CreateConcelhoDto) {
    Id: number;
}
