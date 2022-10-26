import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('distrito')
export class Distrito {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column({default: ''})
    Codigo: string;

    @Column({default: ''})
    Nome: string;  
}
