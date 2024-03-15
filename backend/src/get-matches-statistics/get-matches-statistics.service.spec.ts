import { Test, TestingModule } from '@nestjs/testing';
import { GetMatchesStatisticsService } from './get-matches-statistics.service';

describe('GetMatchesStatisticsService', () => {
  let service: GetMatchesStatisticsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetMatchesStatisticsService],
    }).compile();

    service = module.get<GetMatchesStatisticsService>(
      GetMatchesStatisticsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
