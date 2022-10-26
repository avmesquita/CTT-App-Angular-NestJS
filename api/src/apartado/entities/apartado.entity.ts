import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
export class Apartado {

    @PrimaryGeneratedColumn()
    Id: number;  

    @Column({default: ''})
    PostalOfficeIdentification: string;

    @Column({default: ''})
    FirstPOBox: string;

    @Column({default: ''})
    LastPOBox: string;

    @Column({default: ''})
    PostalCode: string;

    @Column({default: ''})
    PostalCodeExtension: string;

    @Column({default: ''})
    PostalName: string;

    @Column({default: ''})
    PostalCodeSpecial: string;

    @Column({default: ''})
    PostalCodeSpecialExtension: string;

    @Column({default: ''})
    PostalNameSpecial: string;
}
