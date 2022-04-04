import { BaseProvider } from '@ethersproject/providers';
import { Injectable } from '@nestjs/common';
import { Contract, ethers } from 'ethers';
import { Player } from './interfaces/player.interface';
import goodGhostingAbi from './abi/good-ghosting-contract';

@Injectable()
export class GhostingApisService {
  private kovanProvider: BaseProvider = ethers.getDefaultProvider('kovan');
  private contractAddress = '0xc69a569405EAE312Ca13C2eD85a256FbE4992A35';
  private contract: Contract;

  constructor() {
    this.contract = new ethers.Contract(
      this.contractAddress,
      goodGhostingAbi,
      this.kovanProvider,
    );
  }

  getContract(): Contract {
    return this.contract;
  }

  async getPlayerInformation(address: string): Promise<Player> {
    return await this.contract.players(address);
  }

  async getBlockTimestamp(): Promise<number> {
    return new Promise((resolve) => {
      this.kovanProvider
        .getBlockNumber()
        .then((blockNumber) => this.kovanProvider.getBlock(blockNumber))
        .then((block) => resolve(block.timestamp));
    });
  }

  async getFirstSegmentStart(): Promise<number> {
    return await this.contract.firstSegmentStart();
  }

  async getSegmentLength(): Promise<number> {
    return await this.contract.segmentLength();
  }

  async getTestCurrentSegment(): Promise<number> {
    return await this.contract.getCurrentSegment();
  }
}
