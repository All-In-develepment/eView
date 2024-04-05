import { Test, TestingModule } from '@nestjs/testing';
import { GetPlayerService } from './get-player.service';

describe('GetPlayerService', () => {
  let service: GetPlayerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetPlayerService],
    }).compile();

    service = module.get<GetPlayerService>(GetPlayerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
