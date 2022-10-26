import { Test, TestingModule } from '@nestjs/testing';
import { ConcelhoService } from './concelho.service';

describe('ConcelhoService', () => {
  let service: ConcelhoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConcelhoService],
    }).compile();

    service = module.get<ConcelhoService>(ConcelhoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
