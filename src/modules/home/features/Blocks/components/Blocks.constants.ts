import { BlockEnum } from '@/components/Block/constants';
import { IBlock } from '@/components/Block/type';

export const BLOCK_PENDING_DUMMY_LIST: IBlock[] = new Array(5).fill({
  number: '',
  status: '',
  hash: '',
  commitTxHash: null,
  l1BatchNumber: 0,
  isL1BatchSealed: false,
  executeTxHash: null,
  proveTxHash: null,
  committedAt: null,
  executedAt: null,
  provenAt: null,
  l1TxCount: 0,
  l2TxCount: 0,
  timestamp: '',
  blockType: BlockEnum.PENDING,
});

export const BLOCK_SUCCESS_DUMMY_LIST: IBlock[] = new Array(5).fill({
  number: '',
  status: '',
  hash: '',
  commitTxHash: null,
  l1BatchNumber: 0,
  isL1BatchSealed: false,
  executeTxHash: null,
  proveTxHash: null,
  committedAt: null,
  executedAt: null,
  provenAt: null,
  l1TxCount: 0,
  l2TxCount: 0,
  timestamp: '',
  blockType: BlockEnum.SUCCESS,
});
