export interface PlayerResponse {
  status: number; // -1: Error in getting contract, 0: address doesn't exist, 1: success
  message: string;
  data: any;
}
