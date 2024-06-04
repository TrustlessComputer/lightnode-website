import { ILightNodeStatusResponse } from '@/services/LightNode/type';

export interface ILightNodeState {
  lightNodeStatus: ILightNodeStatusResponse;
  isLightNodeStatusFetching: boolean;
  isLightNodeStatusFetched: boolean;
  fetchLightNodeStatusError?: Error | string;

  //Load More
  isLoadMore: boolean;
  totalBatches: number;
  currentPage: number;
  numberOfItems: number;
}
