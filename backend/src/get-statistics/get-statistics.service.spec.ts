import { Test, TestingModule } from '@nestjs/testing';
import { GetStatisticsService } from './get-statistics.service';

describe('GetStatisticsService', () => {
  let service: GetStatisticsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetStatisticsService],
    }).compile();

    service = module.get<GetStatisticsService>(GetStatisticsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
