import { Injectable } from '@nestjs/common';
import { Observable, of, from } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions, FindManyOptions, Like } from 'typeorm';
import { switchMap, map, tap } from 'rxjs/operators';
import { Pagination, IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';

import { CreateCodigoPostalDto } from './dto/create-codigo-postal.dto';
import { UpdateCodigoPostalDto } from './dto/update-codigo-postal.dto';
import { CodigoPostal } from './entities/codigo-postal.entity';

@Injectable()
export class CodigoPostalService {

  constructor(
    @InjectRepository(CodigoPostal) private readonly codigoPostalRepository: Repository<CodigoPostal>        
  ) {}

  create(createCodigoPostalDto: CreateCodigoPostalDto): Observable<CodigoPostal> {
    return from(this.codigoPostalRepository.save(createCodigoPostalDto));
  }

  findAll(): Observable<CodigoPostal[]> {
    return from(this.codigoPostalRepository.find());
  }

  findCP(text: string): Observable<CodigoPostal[]> {

    let cp = '';
    let ext = '';
    if (text.indexOf('-') > 0) {
      cp = text.split('-')[0];
      ext = text.split('-')[1];
    }
    if (ext === '') {
      ext = ' ';    
    }
    const criteria: FindManyOptions<CodigoPostal> = {
      select: [
        'Id',
        'CodigoDistrito',
        'CodigoConcelho',
        'CodigoLocalidade',
        'NomeLocalidade',
        'CodigoArteria',
        'ArteriaTipo',
        'PrimeiraPreposicao',
        'ArteriaTitulo',
        'SegundaPreposicao',
        'ArteriaDesignacao',
        'ArteriaInformacaoLocalZona',
        'Troco',
        'NumeroPorta',
        'NomeCliente',
        'NumeroCodigoPostal',
        'NumeroExtensaoCodigoPostal',
        'DesignacaoPostal'
      ]      
    }
    if (cp.trim() !== '' && ext.trim() !== '') {
      criteria.where = { /* AND */
         NumeroCodigoPostal: cp,
         NumeroExtensaoCodigoPostal: ext 
      }
    } else if (cp.trim() !== '' && ext.trim() == 'CP') { /* ONLY CP */
      criteria.where = { 
        NumeroCodigoPostal: cp
     }
    } else {
      criteria.where = [ /* OR */
        { NumeroCodigoPostal: Like('%' + text + '%') },
        { NumeroExtensaoCodigoPostal: Like('%' + text + '%') },
        { NomeCliente: Like('%' + text + '%') },
        { NomeLocalidade: Like('%' + text + '%') },
        { DesignacaoPostal: Like('%' + text + '%') },
        { ArteriaTipo: Like('%' + text + '%') },
        { ArteriaDesignacao: Like('%' + text + '%') }
      ];
    }
    
    return from(this.codigoPostalRepository.find(criteria)); 
    /*
    let query = this.codigoPostalRepository.createQueryBuilder("codigopostal");
    query.where(" NumeroCodigoPostal like '%" + text + "%'");
    query.orWhere(" NumeroExtensaoCodigoPostal like '%" + text + "%'");
    query.orWhere(" NomeCliente like '%" + text + "%'");
    query.orWhere(" NomeLocalidade like '%" + text + "%'");
    return from(query.getMany());    
    */   
  }


  paginateAll(options: IPaginationOptions): Observable<Pagination<CodigoPostal>> {
    return from(paginate<CodigoPostal>(this.codigoPostalRepository, options)).pipe(
        map((codigoPostalEntries: Pagination<CodigoPostal>) => codigoPostalEntries)
    )
  }

  findOne(id: number): Observable<CodigoPostal> {
    const criteria: FindOneOptions<CodigoPostal> = {
        select: [
          'Id',
          'CodigoDistrito',
          'CodigoConcelho',
          'CodigoLocalidade',
          'NomeLocalidade',
          'CodigoArteria',
          'ArteriaTipo',
          'PrimeiraPreposicao',
          'ArteriaTitulo',
          'SegundaPreposicao',
          'ArteriaDesignacao',
          'ArteriaInformacaoLocalZona',
          'Troco',
          'NumeroPorta',
          'NomeCliente',
          'NumeroCodigoPostal',
          'NumeroExtensaoCodigoPostal',
          'DesignacaoPostal'
        ],        
        where: {
            Id: id,
        },
    };
    return from(this.codigoPostalRepository.findOne(criteria));
}

  update(id: number, updateCodigoPostalDto: UpdateCodigoPostalDto): Observable<CodigoPostal> {
    return from(this.codigoPostalRepository.update(id, updateCodigoPostalDto)).pipe(
        switchMap(() => this.findOne(id))
    )
  }

  remove(id: number) {
    return from(this.codigoPostalRepository.delete(id));
  }
}
