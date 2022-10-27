import { ApiProperty } from '@nestjs/swagger';

export class CreateConcelhoDto {

    @ApiProperty()
    Codigo: string;

    @ApiProperty()
    CodigoDistrito: string;

    @ApiProperty()
    Nome: string;      
}
