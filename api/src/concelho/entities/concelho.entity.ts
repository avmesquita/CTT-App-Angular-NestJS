import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('concelho')
export class Concelho {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column({default: ''})
    Codigo: string;

    @Column({default: ''})
    CodigoDistrito: string;

    @Column({default: ''})
    Nome: string;  

    //@Column({default: ''})
    //NomeDistrito: string;
}
