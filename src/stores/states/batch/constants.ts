import { IBatchData } from '@/services/Batch/type';
import { BatchStatusEnum, IBatch } from './types';

export const QUEUE_JOB_PLACEHOLDER: IBatchData[] = new Array(5)
  .fill(0)
  .map((_, index) => {
    return {
      baseTxLength: 0,
      batchNumber: '',
      revealTxId: '',
      status: 'queued',
      isEmpty: true,
    };
  });
