import { Test, TestingModule } from '@nestjs/testing';
import { GetTeamStatisticsService } from './get-team-statistics.service';

describe('GetTeamStatisticsService', () => {
  let service: GetTeamStatisticsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetTeamStatisticsService],
    }).compile();

    service = module.get<GetTeamStatisticsService>(GetTeamStatisticsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
