import { Test, TestingModule } from '@nestjs/testing';
import { ApartadoController } from './apartado.controller';
import { ApartadoService } from './apartado.service';

describe('ApartadoController', () => {
  let controller: ApartadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApartadoController],
      providers: [ApartadoService],
    }).compile();

    controller = module.get<ApartadoController>(ApartadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
