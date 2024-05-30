export type IBatchStatus = {
  batchNumber?: string;
  status?: string;
  revealTxId?: string;
};

export type IStatusResponse = {
  pending: number;
  pendingJob: IBatchStatus[];
  sending: number;
  sendingJob: IBatchStatus[];
  success: number;
  successJob: IBatchStatus[];
};
