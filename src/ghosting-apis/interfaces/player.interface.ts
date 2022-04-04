import { Uint256 } from 'soltypes';

export interface Player {
  addr: string;
  withdrawn: boolean;
  canRejoin: boolean;
  mostRecentSegmentPaid: Uint256;
  amountPaid: Uint256;
}
