import { Concelho } from "src/concelho/entities/concelho.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable } from "typeorm";

@Entity('distrito')
export class Distrito {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column({default: ''})
    Codigo: string;

    @Column({default: ''})
    Nome: string;  
}
