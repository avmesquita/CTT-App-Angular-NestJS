import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('codigopostal')
export class CodigoPostal {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column({default: ''})
    CodigoDistrito: string;

    @Column({default: ''})
    CodigoConcelho: string;

    @Column({default: ''})
    CodigoLocalidade: string;

    @Column({default: ''})
    NomeLocalidade: string;

    @Column({default: ''})
    CodigoArteria: string;

    @Column({default: ''})
    ArteriaTipo: string;

    @Column({default: ''})
    PrimeiraPreposicao: string;

    @Column({default: ''})
    ArteriaTitulo: string;

    @Column({default: ''})
    SegundaPreposicao: string;

    @Column({default: ''})
    ArteriaDesignacao: string;

    @Column({default: ''})
    ArteriaInformacaoLocalZona: string;

    @Column({default: ''})
    Troco: string;

    @Column({default: ''})
    NumeroPorta: string;

    @Column({default: ''})
    NomeCliente: string;

    @Column({default: ''})
    NumeroCodigoPostal: string;

    @Column({default: ''})
    NumeroExtensaoCodigoPostal: string;

    @Column({default: ''})
    DesignacaoPostal: string;  

    /*
    @Column({default: ''})
    NomeConcelho: string;

    @Column({default: ''})
    NomeDistrito: string;
    */
}
