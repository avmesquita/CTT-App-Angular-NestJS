import { Test, TestingModule } from '@nestjs/testing';
import { ApartadoService } from './apartado.service';

describe('ApartadoService', () => {
  let service: ApartadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApartadoService],
    }).compile();

    service = module.get<ApartadoService>(ApartadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
