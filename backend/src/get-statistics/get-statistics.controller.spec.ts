import { Test, TestingModule } from '@nestjs/testing';
import { GetStatisticsController } from './get-statistics.controller';
import { GetStatisticsService } from './get-statistics.service';

describe('GetStatisticsController', () => {
  let controller: GetStatisticsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetStatisticsController],
      providers: [GetStatisticsService],
    }).compile();

    controller = module.get<GetStatisticsController>(GetStatisticsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
