import { Controller, Get } from '@nestjs/common';
import { GhostingApisService } from './ghosting-apis.service';

@Controller()
export class GameController {
  constructor(private readonly ghostingApisService: GhostingApisService) {}

  @Get('/games/getCurrentSegment')
  getCurrentSegment(): Promise<number> {
    return new Promise((resolve) => {
      this.ghostingApisService
        .getBlockTimestamp()
        .then((timestamp) => {
          return new Promise<number>((resolve) => {
            this.ghostingApisService
              .getFirstSegmentStart()
              .then((firstSegment) => resolve(timestamp - firstSegment));
          });
        })
        .then((offsetTime) => {
          this.ghostingApisService.getSegmentLength().then((segmentLength) => {
            const currentSegment = offsetTime / segmentLength;
            resolve(Math.floor(currentSegment));
          });
        });
    });
  }
}
