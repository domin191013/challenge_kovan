import { Test } from '@nestjs/testing';
import { GameController } from './games.controller';
import { GhostingApisService } from './ghosting-apis.service';

describe('Game Controller', () => {
  let gameController: GameController;
  let ghostingApisService: GhostingApisService;

  beforeEach(async () => {
    // magic happens with the following line
    const module = await Test.createTestingModule({
      controllers: [GameController],
      providers: [
        GhostingApisService,
        //... any other needed import goes here
      ],
    }).compile();

    ghostingApisService = module.get<GhostingApisService>(GhostingApisService);
    gameController = module.get<GameController>(GameController);
  });

  // The next 4 lines are optional and depends on whether you would need to perform these cleanings of the mocks or not after each tests within this describe section
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(gameController).toBeDefined();
    expect(ghostingApisService).toBeDefined();
  });

  describe('getCurrentSegment API', () => {
    it('should return current segment value', async () => {
      const timestamp = 0x330;
      const firstSegment = 0x300;
      const segmentLength = 0x30;
      jest
        .spyOn(ghostingApisService, 'getBlockTimestamp')
        .mockImplementation(
          async (): Promise<number> => Promise.resolve(timestamp),
        );
      jest
        .spyOn(ghostingApisService, 'getFirstSegmentStart')
        .mockImplementation(
          async (): Promise<number> => Promise.resolve(firstSegment),
        );
      jest
        .spyOn(ghostingApisService, 'getSegmentLength')
        .mockImplementation(
          async (): Promise<number> => Promise.resolve(segmentLength),
        );

      expect(await gameController.getCurrentSegment()).toBe(1);
    });
  });
});
