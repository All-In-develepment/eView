import { Test, TestingModule } from '@nestjs/testing';
import { GetPlayerController } from './get-player.controller';
import { GetPlayerService } from './get-player.service';

describe('GetPlayerController', () => {
  let controller: GetPlayerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetPlayerController],
      providers: [GetPlayerService],
    }).compile();

    controller = module.get<GetPlayerController>(GetPlayerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
