// import l2ServicesAPI from '@/services/api/l2services';
import BatchAPI from '@/services/Batch';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IBatch } from './types';

const fetchBatchSuccessList = createAsyncThunk(
  `BATCH_STATE/fetchBatchSuccessList`,
  async () => {
    try {
      const data: IBatch[] = await BatchAPI.getBatchSuccess();
      return data;
    } catch (error) {
      throw error;
    }
  },
);

const fetchBatchPendingList = createAsyncThunk(
  `BATCH_STATE/fetchBatchPendingList`,
  async (): Promise<IBatch[]> => {
    try {
      const data: IBatch[] = await BatchAPI.getBatchPending();
      return data;
    } catch (error) {
      throw error;
    }
  },
);

export { fetchBatchPendingList, fetchBatchSuccessList };
