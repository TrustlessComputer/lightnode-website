import { BlockEnum } from './constants';

export type IBlock = {
  //Old Structure
  number: number | string;
  status: string;
  hash: string;
  commitTxHash: null | string;
  l1BatchNumber: number;
  isL1BatchSealed: boolean;
  executeTxHash: null | string;
  proveTxHash: null | string;
  committedAt: null | string;
  executedAt: null | string;
  provenAt: null | string;
  l1TxCount: number;
  l2TxCount: number;
  timestamp: string;
  isProvenByNewProver?: boolean;

  //New
  blockType: BlockEnum;
};
