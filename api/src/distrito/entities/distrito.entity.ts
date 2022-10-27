import { CodigoPostal } from "src/codigo-postal/entities/codigo-postal.entity";
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

    @OneToMany(type => Concelho, concelho => concelho.Distrito, { cascade: false, nullable: true })
    concelhos: Concelho[];
}
