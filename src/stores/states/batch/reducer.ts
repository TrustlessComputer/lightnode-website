import {
  IBatchData,
  IBatchStatusResponse,
  StatusResponseInit,
} from '@/services/Batch/type';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchBatchStatus } from './actions';
import { IBatchState } from './types';

const initialState: IBatchState = {
  isBatchStatusFetching: false,
  isBatchStatusFetched: false,
  batchStatus: StatusResponseInit,

  currentBatchSelect: undefined,

  //LoadMore
  isLoadMore: false,
  totalBatches: 0,
  currentPage: 0,
  numberOfItems: 50,
};

const slice = createSlice({
  name: 'BATCH_STATE',
  initialState: initialState,
  reducers: {
    setCurrentBath: (state, action: PayloadAction<IBatchData | undefined>) => {
      state.currentBatchSelect = action.payload;
    },
    setLoadMore: (state, action: PayloadAction<boolean>) => {
      state.isLoadMore = action.payload;
      state.currentPage = state.currentPage + 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBatchStatus.pending, (state) => {
        state.isBatchStatusFetching = true;
      })
      .addCase(
        fetchBatchStatus.fulfilled,
        (state, action: PayloadAction<IBatchStatusResponse>) => {
          state.isBatchStatusFetching = false;
          state.isBatchStatusFetched = true;
          const { success, successJob } = state.batchStatus;

          const {
            queued: queuedNew,
            queuedJob: queuedJobNew,
            pending: pendingNew,
            pendingJob: pendingJobNew,
            sending: sendingNew,
            sendingJob: sendingJobNew,
            success: successNew,
            successJob: successJobNew,
          } = action.payload;

          state.batchStatus = {
            ...state.batchStatus,
            queued: queuedNew,
            queuedJob: queuedJobNew,
            pending: pendingNew,
            pendingJob: pendingJobNew,
            sending: sendingNew,
            sendingJob: sendingJobNew,
            success: success + successNew,
            successJob: [...successJob, ...successJobNew],
            totalBatches: action.payload.totalBatches,
          };
          state.isLoadMore = false;
          state.totalBatches = action.payload.totalBatches || 0;
          state.fetchBatchStatusError = undefined;
        },
      )
      .addCase(fetchBatchStatus.rejected, (state, action) => {
        state.isBatchStatusFetching = false;
        state.isBatchStatusFetched = true;
        state.batchStatus = StatusResponseInit;
        state.fetchBatchStatusError = action.error.message;
      });
  },
});

export const { setCurrentBath, setLoadMore } = slice.actions;

export default slice.reducer;
