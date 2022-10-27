import { Distrito } from "src/distrito/entities/distrito.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity('concelho')
export class Concelho {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column({default: ''})
    Codigo: string;

    @Column({default: ''})
    Nome: string;  

    @Column({default: ''})
    CodigoDistrito: string;

    @ManyToOne(type => Distrito, { eager: true, cascade: false })
    @JoinColumn(
        { name: 'CodigoDistrito', referencedColumnName: 'Codigo' }
    )    
    Distrito: Distrito;
}
