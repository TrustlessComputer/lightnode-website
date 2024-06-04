import { BatchStatusEnum, IBatch } from '@/stores/states/batch/types';

export const BATCH_PENDING_LIST: IBatch[] = new Array(5)
  .fill(0)
  .map((_, index) => {
    return {
      base_batch_number: ``,
      bitcoin_tx_hash: `PENDING-${index}`,
      da_tx_hash: '',
      batch_data: undefined,
      status: BatchStatusEnum.PENDING,
      label: '',
    };
  });

export const BATCH_SUCCESS_LIST: IBatch[] = new Array(5)
  .fill(0)
  .map((_, index) => {
    return {
      base_batch_number: '87654',
      bitcoin_tx_hash: `SUCCESS-${index}`,
      da_tx_hash: '',
      batch_data: undefined,
      status: BatchStatusEnum.SUCCESS,
      label: '',
    };
  });

export const BATCH_SUCCESS_LIST_V2: IBatch[] = new Array(10)
  .fill(0)
  .map((_, index) => {
    return {
      base_batch_number: '87654',
      bitcoin_tx_hash: `SUCCESS-${index}`,
      da_tx_hash: '',
      batch_data: undefined,
      status: BatchStatusEnum.SUCCESS,
      label: '',
    };
  });
