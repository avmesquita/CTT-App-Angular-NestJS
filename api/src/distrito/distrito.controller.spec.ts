import { Test, TestingModule } from '@nestjs/testing';
import { DistritoController } from './distrito.controller';
import { DistritoService } from './distrito.service';

describe('DistritoController', () => {
  let controller: DistritoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DistritoController],
      providers: [DistritoService],
    }).compile();

    controller = module.get<DistritoController>(DistritoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
