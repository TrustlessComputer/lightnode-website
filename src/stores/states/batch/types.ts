import { IStatusResponse } from '@/services/Batch/type';

export enum BatchStatusEnum {
  SUCCESS = 1,
  PENDING = 2,
}

export type IBatch = {
  base_batch_number: string;
  bitcoin_tx_hash: string;
  da_tx_hash: string;
  batch_data: any;

  //Local State
  status?: BatchStatusEnum;
  label?: string;
};

export interface IBatchState {
  batchStatus: IStatusResponse;
  isBatchStatusFetching: boolean;
  isBatchStatusFetched: boolean;
  fetchBatchStatusError?: Error | string;

  batchSuccessList: IBatch[];
  isBatchSuccessFetching: boolean;
  isBatchSuccessFetched: boolean;
  fetchBatchSucessError?: Error | string;

  batchPendingList: IBatch[];
  isBatchPendingFetching: boolean;
  isBatchPendingFetched: boolean;
  fetchBatchPendingError?: Error | string;

  currentBatchSelect: IBatch | undefined;
}
