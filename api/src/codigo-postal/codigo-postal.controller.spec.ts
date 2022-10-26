import { Test, TestingModule } from '@nestjs/testing';
import { CodigoPostalController } from './codigo-postal.controller';
import { CodigoPostalService } from './codigo-postal.service';

describe('CodigoPostalController', () => {
  let controller: CodigoPostalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CodigoPostalController],
      providers: [CodigoPostalService],
    }).compile();

    controller = module.get<CodigoPostalController>(CodigoPostalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
