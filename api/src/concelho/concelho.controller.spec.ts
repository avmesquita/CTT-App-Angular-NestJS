import { Test, TestingModule } from '@nestjs/testing';
import { ConcelhoController } from './concelho.controller';
import { ConcelhoService } from './concelho.service';

describe('ConcelhoController', () => {
  let controller: ConcelhoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConcelhoController],
      providers: [ConcelhoService],
    }).compile();

    controller = module.get<ConcelhoController>(ConcelhoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
