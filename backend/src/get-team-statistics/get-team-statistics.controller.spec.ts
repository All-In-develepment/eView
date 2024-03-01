import { Test, TestingModule } from '@nestjs/testing';
import { GetTeamStatisticsController } from './get-team-statistics.controller';
import { GetTeamStatisticsService } from './get-team-statistics.service';

describe('GetTeamStatisticsController', () => {
  let controller: GetTeamStatisticsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetTeamStatisticsController],
      providers: [GetTeamStatisticsService],
    }).compile();

    controller = module.get<GetTeamStatisticsController>(GetTeamStatisticsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
