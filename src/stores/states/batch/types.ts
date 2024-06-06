import { IBatchData, IBatchStatusResponse } from '@/services/Batch/type';

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
