import { API_URL } from '@/config';
import createAxiosInstance from '@/services/http-client';
import { IStatusResponse } from './type';

const apiClient = createAxiosInstance({
  baseURL: `${API_URL}`,
});

export const getBatchStatus = async () => {
  try {
    const result: IStatusResponse = await apiClient.get(`/status`);
    return result;
  } catch (error) {
    throw error;
  }
};
