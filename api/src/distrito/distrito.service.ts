import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { from, map, Observable, switchMap } from 'rxjs';
import { Repository, FindOneOptions, FindManyOptions } from 'typeorm';

import { CreateDistritoDto } from './dto/create-distrito.dto';
import { UpdateDistritoDto } from './dto/update-distrito.dto';
import { Distrito } from './entities/distrito.entity';

@Injectable()
export class DistritoService {

  constructor(
    @InjectRepository(Distrito) private readonly distritoRepository: Repository<Distrito>
  ) {}

  create(createDistritoDto: CreateDistritoDto): Observable<Distrito> {
    return from(this.distritoRepository.save(createDistritoDto));
  }

  findAll(): Observable<Distrito[]> {
    return from(this.distritoRepository.find());    
  }

  paginateAll(options: IPaginationOptions): Observable<Pagination<Distrito>> {
    return from(paginate<Distrito>(this.distritoRepository, options)).pipe(
        map((distritoEntries: Pagination<Distrito>) => distritoEntries)
    )
  }

  findOne(id: number): Observable<Distrito> {
    const criteria: FindOneOptions<Distrito> = {
      select: [
          'Id', 
          'Codigo', 
          'Nome'
      ],
      where: {
          Id: id,
      }
    }
    return from(this.distritoRepository.findOne(criteria));
  }

  update(id: number, updateDistritoDto: UpdateDistritoDto): Observable<Distrito> {
    return from(this.distritoRepository.update(id, updateDistritoDto)).pipe(
      switchMap(() => this.findOne(id))
    )
  }

  remove(id: number): any {
    return from(this.distritoRepository.delete(id));
  }
}
