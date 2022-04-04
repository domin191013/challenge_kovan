import { Controller, Get, Param } from '@nestjs/common';
import { ifError } from 'assert';
import { GhostingApisService } from './ghosting-apis.service';
import { PlayerResponse } from './interfaces/players.response';

@Controller()
export class PlayerController {
  constructor(private readonly ghostingApisService: GhostingApisService) {}

  @Get('/players/:address')
  getPlayers(@Param('address') address): Promise<PlayerResponse> {
    return new Promise((resolve) => {
      this.ghostingApisService
        .getPlayerInformation(address)
        .then((player) => {
          if (player.addr == '0x0000000000000000000000000000000000000000') {
            return resolve({
              status: 0,
              message: "This address doesn't exist in the game players list",
              data: player,
            });
          }

          return resolve({
            status: 1,
            message: 'This address is part of the game players',
            data: player,
          });
        })
        .catch((error) =>
          resolve({
            status: -1,
            message: 'There had been an exception occurred.',
            data: error,
          }),
        );
    });
  }
}
