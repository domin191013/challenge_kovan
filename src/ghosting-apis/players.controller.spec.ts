import { Test } from '@nestjs/testing';
import { PlayerController } from './players.controller';
import { GhostingApisService } from './ghosting-apis.service';

describe('Player Controller', () => {
  let playerController: PlayerController;
  let ghostingApisService: GhostingApisService;

  beforeEach(async () => {
    // magic happens with the following line
    const module = await Test.createTestingModule({
      controllers: [PlayerController],
      providers: [
        GhostingApisService,
        //... any other needed import goes here
      ],
    }).compile();

    ghostingApisService = module.get<GhostingApisService>(GhostingApisService);
    playerController = module.get<PlayerController>(PlayerController);
  });

  // The next 4 lines are optional and depends on whether you would need to perform these cleanings of the mocks or not after each tests within this describe section
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(playerController).toBeDefined();
    expect(ghostingApisService).toBeDefined();
  });

  describe('getPlayerInformation API', () => {
    it("should return status 0 when the address doesn't exist", async () => {
      const result = {
        addr: '0x0000000000000000000000000000000000000000',
        withdrawn: false,
        canRejoin: false,
        amountPaid: 0x00,
        mostRecentSegmentPaid: 0x00,
      };
      const address = '0x8ba1f109551bd432803012645ac136ddd64dba72';
      jest
        .spyOn(ghostingApisService, 'getPlayerInformation')
        .mockImplementation(async (): Promise<any> => Promise.resolve(result));

      expect(await (await playerController.getPlayers(address)).status).toBe(0);
    });

    it('should return status 1 when the address exist and succeeded', async () => {
      const result = {
        addr: '0xDfe287AE810FC500a5a795bF83361B37c7b4172F',
        withdrawn: false,
        canRejoin: false,
        amountPaid: 0x0de0b6b3a7640000,
        mostRecentSegmentPaid: 0x00,
      };
      const address = '0xDfe287AE810FC500a5a795bF83361B37c7b4172F';
      jest
        .spyOn(ghostingApisService, 'getPlayerInformation')
        .mockImplementation(async (): Promise<any> => Promise.resolve(result));

      expect(await (await playerController.getPlayers(address)).status).toBe(1);
    });
  });
});
