import { ApiProperty } from '@nestjs/swagger';

export class CreateCodigoPostalDto {

    @ApiProperty()
    CodigoDistrito: string;

    @ApiProperty()
    CodigoConcelho: string;

    @ApiProperty()
    CodigoLocalidade: string;

    @ApiProperty()
    NomeLocalidade: string;

    @ApiProperty()
    CodigoArteria: string;

    @ApiProperty()
    ArteriaTipo: string;

    @ApiProperty()
    PrimeiraPreposicao: string;

    @ApiProperty()
    ArteriaTitulo: string;

    @ApiProperty()
    SegundaPreposicao: string;

    @ApiProperty()
    ArteriaDesignacao: string;

    @ApiProperty()
    ArteriaInformacaoLocalZona: string;

    @ApiProperty()
    Troco: string;

    @ApiProperty()
    NumeroPorta: string;

    @ApiProperty()
    NomeCliente: string;

    @ApiProperty()
    NumeroCodigoPostal: string;

    @ApiProperty()
    NumeroExtensaoCodigoPostal: string;

    @ApiProperty()
    DesignacaoPostal: string;  

    @ApiProperty()
    NomeConcelho: string;

    @ApiProperty()
    NomeDistrito: string;
}
