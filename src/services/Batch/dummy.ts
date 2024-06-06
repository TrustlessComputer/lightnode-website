import { IBatchData } from './type';

export const BATCH_PENDING_LIST: IBatchData[] = new Array(5)
  .fill(0)
  .map((_, index) => {
    return {
      batchNumber: '1',
      status: 'queued',
      revealTxId: `PENDING-TX-${index}`,
      proverJob: {
        l1_batch_number: 1,
        success: 12,
        failed: 3,
        in_progress: 5,
        queued: 7,
        compression_status: 'queued',
      },
    };
  });

export const BATCH_SUCCESS_LIST: IBatchData[] = new Array(5)
  .fill(0)
  .map((_, index) => {
    return {
      batchNumber: '1',
      status: 'success',
      revealTxId: `SUCCESS-TX-${index}`,
    };
  });

export const BATCH_SUCCESS_LIST_V2: IBatchData[] = new Array(10)
  .fill(0)
  .map((_, index) => {
    return {
      batchNumber: '2',
      status: 'success',
      revealTxId: `SUCCESS-TX-${index}`,
    };
  });
