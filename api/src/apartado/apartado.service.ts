import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import { Repository, FindOneOptions, FindManyOptions, Like } from 'typeorm';
import { Pagination, IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';

import { CreateApartadoDto } from './dto/create-apartado.dto';
import { Apartado } from './entities/apartado.entity';
import { UpdateApartadoDto } from './dto/update-apartado.dto';

@Injectable()
export class ApartadoService {

  constructor(
    @InjectRepository(Apartado) private readonly apartadoRepository: Repository<Apartado>        
  ) {}

  create(createApartadoDto: CreateApartadoDto): Observable<Apartado> {
    return from(this.apartadoRepository.save(createApartadoDto));
  }

  findAll(): Observable<Apartado[]> {
    return from(this.apartadoRepository.find());
  }

  paginateAll(options: IPaginationOptions): Observable<Pagination<Apartado>> {
    return from(paginate<Apartado>(this.apartadoRepository, options)).pipe(
        map((apartadoEntries: Pagination<Apartado>) => apartadoEntries)
    )
}  

  findOne(id: number): Observable<Apartado> {
    const criteria: FindOneOptions<Apartado> = {
        select: [
            'Id', 
            'PostalOfficeIdentification',
            'FirstPOBox',
            'LastPOBox',
            'PostalCode',
            'PostalCodeExtension',
            'PostalName',
            'PostalCodeSpecial',
            'PostalCodeSpecialExtension',
            'PostalNameSpecial'
        ],
        where: {
            Id: id,
        },
    };
    return from(this.apartadoRepository.findOne(criteria));
  }

  findText(text: string): Observable<Apartado[]> {
    const criteria: FindManyOptions<Apartado> = {
      select: [
        'Id', 
        'PostalOfficeIdentification',
        'FirstPOBox',
        'LastPOBox',
        'PostalCode',
        'PostalCodeExtension',
        'PostalName',
        'PostalCodeSpecial',
        'PostalCodeSpecialExtension',
        'PostalNameSpecial'
      ],
      where: [
        { PostalOfficeIdentification: Like('%' + text + '%')},
        { FirstPOBox: Like('%' + text + '%')},
        { LastPOBox: Like('%' + text + '%')},
        { PostalCode: Like('%' + text + '%')},
        { PostalCodeExtension: Like('%' + text + '%')},
        { PostalName: Like('%' + text + '%')},
        { PostalCodeSpecial: Like('%' + text + '%')},
        { PostalCodeSpecialExtension: Like('%' + text + '%')},
        { PostalNameSpecial: Like('%' + text + '%')}
      ]
    }
    return from(this.apartadoRepository.find(criteria));
  }  

  update(id: number, updateApartadoDto: UpdateApartadoDto): Observable<Apartado> {
    return from(this.apartadoRepository.update(id, updateApartadoDto)).pipe(
        switchMap(() => this.findOne(id))
    )
  }

  remove(id: number): any {
    return from(this.apartadoRepository.delete(id));
  }
}
