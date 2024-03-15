import { Test, TestingModule } from '@nestjs/testing';
import { GetMatchesStatisticsController } from './get-matches-statistics.controller';
import { GetMatchesStatisticsService } from './get-matches-statistics.service';

describe('GetMatchesStatisticsController', () => {
  let controller: GetMatchesStatisticsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetMatchesStatisticsController],
      providers: [GetMatchesStatisticsService],
    }).compile();

    controller = module.get<GetMatchesStatisticsController>(
      GetMatchesStatisticsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
