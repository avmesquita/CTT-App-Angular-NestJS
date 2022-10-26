import { Injectable } from '@nestjs/common';
import { Observable, of, from } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
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
          'DesignacaoPostal',
          'NomeConcelho',
          'NomeDistrito'
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
