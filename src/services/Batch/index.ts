import { CHAIN_API } from '@/config';
import createAxiosInstance from '@/services/http-client';
import { IBatchStatusResponse } from './type';
import { BATCH_PENDING_LIST, BATCH_SUCCESS_LIST } from './dummy';

const apiClient = createAxiosInstance({
  baseURL: `${CHAIN_API}`,
});

export type IGetBatchStatus = {
  currentPage?: number;
  numberOfItems?: number;
};

const getBatchStatus = async ({
  currentPage,
  numberOfItems,
}: IGetBatchStatus) => {
  try {
    const result: IBatchStatusResponse = await apiClient.get(
      `/status/${currentPage}/${numberOfItems}`,
    );
    return result;
  } catch (error) {
    throw error;
  }
};

const BatchAPI = {
  getBatchStatus,
};

export default BatchAPI;
