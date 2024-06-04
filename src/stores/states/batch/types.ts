import { IBatchData, IBatchStatusResponse } from '@/services/Batch/type';

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
  batchStatus: IBatchStatusResponse;
  isBatchStatusFetching: boolean;
  isBatchStatusFetched: boolean;
  fetchBatchStatusError?: Error | string;

  currentBatchSelect: IBatchData | undefined;

  //Load More
  isLoadMore: boolean;
  totalBatches: number;
  currentPage: number;
  numberOfItems: number;
}
