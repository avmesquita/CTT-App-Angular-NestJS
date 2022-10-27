import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { from, map, Observable, switchMap } from 'rxjs';
import { Repository, FindOneOptions, FindManyOptions, Like } from 'typeorm';
import { CreateConcelhoDto } from './dto/create-concelho.dto';
import { UpdateConcelhoDto } from './dto/update-concelho.dto';
import { Concelho } from './entities/concelho.entity';

@Injectable()
export class ConcelhoService {

  constructor(
    @InjectRepository(Concelho) private readonly concelhoRepository: Repository<Concelho>        
  ) {}

  create(createConcelhoDto: CreateConcelhoDto): Observable<Concelho> {
    return from(this.concelhoRepository.save(createConcelhoDto));
  }

  findAll(): Observable<Concelho[]> {
    return from(this.concelhoRepository.find());
  }

  paginateAll(options: IPaginationOptions): Observable<Pagination<Concelho>> {
    return from(paginate<Concelho>(this.concelhoRepository, options)).pipe(
        map((concelhoEntries: Pagination<Concelho>) => concelhoEntries)
    )
  }  

  findOne(id: number): Observable<Concelho> {
    const criteria: FindOneOptions<Concelho> = {
      select: [
          'Id', 
          'Codigo', 
          'CodigoDistrito',
          'Nome'          
      ],      
      where: {
          Id: id,
      }
    };
    return from(this.concelhoRepository.findOne(criteria));
  }

  findConcelhoName(name: string): Observable<Concelho[]> {
    const criteria: FindManyOptions<Concelho> = {
      select: [
        'Id',
        'Codigo',
        'CodigoDistrito',
        'Nome'
      ],
      where: { Nome: Like('%' + name + '%')}
    }
    return from(this.concelhoRepository.find(criteria));
  }  

  update(id: number, updateConcelhoDto: UpdateConcelhoDto): Observable<Concelho> {
    return from(this.concelhoRepository.update(id, updateConcelhoDto)).pipe(
      switchMap(() => this.findOne(id))
    )
  }

  remove(id: number): any {
    return from(this.concelhoRepository.delete(id));
  }
}
