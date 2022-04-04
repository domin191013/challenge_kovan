import { Module } from '@nestjs/common';
import { GhostingApisService } from './ghosting-apis.service';
import { PlayerController } from './players.controller';
import { GameController } from './games.controller';

@Module({
  providers: [GhostingApisService],
  controllers: [PlayerController, GameController],
})
export class GhostingApisModule {}
