export type IBatchStatus = {
  batchNumber?: string;
  status?: string;
  revealTxId?: string;
};

export type IBatchQueueJob = {
  batchNumber?: string;
  status?: string;
  baseTxLength?: number;
  proverJob?: {
    l1_batch_number: number;
    success?: number;
    failed?: number;
    in_progress?: number;
    queued?: number;
    compression_status?: string; //prove status
  };
};

export type IBatchData = IBatchStatus & IBatchQueueJob;

export type IBatchStatusResponse = {
  totalBatches: number;
  queued: number;
  queuedJob: IBatchData[];
  pending: number;
  pendingJob: IBatchStatus[];
  sending: number;
  sendingJob: IBatchStatus[];
  success: number;
  successJob: IBatchStatus[];
};

export const StatusResponseInit: IBatchStatusResponse = {
  totalBatches: 0,
  queued: 0,
  queuedJob: [],
  pending: 0,
  pendingJob: [],
  sending: 0,
  sendingJob: [],
  success: 0,
  successJob: [],
};
