import { ApiProperty } from '@nestjs/swagger';

export class CreateDistritoDto {

    @ApiProperty()
    Codigo: string;

    @ApiProperty()
    Nome: string;  
}
