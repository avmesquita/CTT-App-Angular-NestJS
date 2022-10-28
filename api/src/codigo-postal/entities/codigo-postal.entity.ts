import { Concelho } from "src/concelho/entities/concelho.entity";
import { Distrito } from "src/distrito/entities/distrito.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

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
    
    /* HAS A BUG INTO DATABASE - TODO: FIX DATABASE CONVERT
    @ManyToOne(type => Concelho, { eager: true, cascade: false, nullable: true })
    @JoinColumn(
        { name: 'CodigoConcelho', referencedColumnName: 'Codigo' }
    )    
    Concelho: Concelho;
    */

    @ManyToOne(type => Distrito, { eager: true, cascade: false, nullable: true })
    @JoinColumn(
        { name: 'CodigoDistrito', referencedColumnName: 'Codigo' }
    )    
    Distrito: Distrito;

}
