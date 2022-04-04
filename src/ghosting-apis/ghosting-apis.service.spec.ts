import { Test, TestingModule } from '@nestjs/testing';
import { GhostingApisService } from './ghosting-apis.service';

describe('GhostingApisService', () => {
  let service: GhostingApisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GhostingApisService],
    }).compile();

    service = module.get<GhostingApisService>(GhostingApisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
