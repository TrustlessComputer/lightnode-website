import BatchAPI, { IGetBatchStatus } from '@/services/Batch';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IBatchStatusResponse } from '@/services/Batch/type';
import { RootState } from '@/stores';

const fetchBatchStatus = createAsyncThunk(
  `BATCH_STATE/fetchBatchStatus`,
  async (_, { dispatch, getState }) => {
    try {
      const rootState = getState() as RootState;
      const { batch: batchState } = rootState;

      const params: IGetBatchStatus = {
        numberOfItems: batchState.numberOfItems,
        currentPage: batchState.currentPage + 1,
      };

      const data: IBatchStatusResponse = await BatchAPI.getBatchStatus(params);
      return data;
    } catch (error) {
      throw error;
    }
  },
);

export { fetchBatchStatus };
