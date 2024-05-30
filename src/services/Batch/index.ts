import { API_URL } from '@/config';
import createAxiosInstance from '@/services/http-client';
import { IStatusResponse } from './type';
import { BATCH_PENDING_LIST, BATCH_SUCCESS_LIST } from './dummy';

const apiClient = createAxiosInstance({
  baseURL: `${API_URL}`,
});

const getBatchStatus = async () => {
  try {
    const result: IStatusResponse = await apiClient.get(`/status`);
    return result;
  } catch (error) {
    throw error;
  }
};

const getBatchSuccess = async () => {
  try {
    // const result: any[] = await apiClient.get(`/todo`);
    // return result;
    return BATCH_SUCCESS_LIST;
  } catch (error) {
    throw error;
  }
};

const getBatchPending = async () => {
  try {
    // const result: any[] = await apiClient.get(`/todo`);
    // return result;

    return BATCH_PENDING_LIST;
  } catch (error) {
    throw error;
  }
};

const BatchAPI = {
  getBatchStatus,
  getBatchSuccess,
  getBatchPending,
};

export default BatchAPI;
