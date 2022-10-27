import { ApiProperty } from '@nestjs/swagger';

export class CreateApartadoDto {

    @ApiProperty()
    PostalOfficeIdentification: string;

    @ApiProperty()
    FirstPOBox: string;

    @ApiProperty()
    LastPOBox: string;

    @ApiProperty()
    PostalCode: string;

    @ApiProperty()
    PostalCodeExtension: string;

    @ApiProperty()
    PostalName: string;

    @ApiProperty()
    PostalCodeSpecial: string;

    @ApiProperty()
    PostalCodeSpecialExtension: string;

    @ApiProperty()
    PostalNameSpecial: string;
}
