import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  fetchBatchPendingList,
  fetchBatchStatus,
  fetchBatchSuccessList,
} from './actions';
import { IBatch, IBatchState } from './types';

const initialState: IBatchState = {
  isBatchStatusFetching: false,
  isBatchStatusFetched: false,
  batchStatus: {
    pending: 0,
    pendingJob: [],
    sending: 0,
    sendingJob: [],
    success: 0,
    successJob: [],
  },

  isBatchSuccessFetched: false,
  isBatchSuccessFetching: false,
  batchSuccessList: [],

  isBatchPendingFetching: false,
  isBatchPendingFetched: false,
  batchPendingList: [],

  currentBatchSelect: undefined,
};

const slice = createSlice({
  name: 'BATCH_STATE',
  initialState: initialState,
  reducers: {
    setCurrentBath: (state, action: PayloadAction<IBatch>) => {
      state.currentBatchSelect = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBatchStatus.pending, (state) => {
        state.isBatchStatusFetching = true;
      })
      .addCase(fetchBatchStatus.fulfilled, (state, action) => {
        state.isBatchStatusFetching = false;
        state.isBatchStatusFetched = true;
        state.batchStatus = action.payload;
        state.fetchBatchStatusError = undefined;
      })
      .addCase(fetchBatchStatus.rejected, (state, action) => {
        state.isBatchStatusFetching = false;
        state.isBatchStatusFetched = true;
        state.batchStatus = {
          pending: 0,
          pendingJob: [],
          sending: 0,
          sendingJob: [],
          success: 0,
          successJob: [],
        };
        state.fetchBatchStatusError = action.error.message;
      })

      .addCase(fetchBatchSuccessList.pending, (state) => {
        state.isBatchSuccessFetching = true;
      })
      .addCase(fetchBatchSuccessList.fulfilled, (state, action) => {
        state.isBatchSuccessFetching = false;
        state.isBatchSuccessFetched = true;
        state.batchSuccessList = action.payload;
      })
      .addCase(fetchBatchSuccessList.rejected, (state, action) => {
        state.isBatchSuccessFetching = false;
        state.isBatchSuccessFetched = true;
        state.batchSuccessList = [];
        state.fetchBatchSucessError = action.error.message;
      })

      .addCase(fetchBatchPendingList.pending, (state) => {
        state.isBatchPendingFetching = true;
      })
      .addCase(fetchBatchPendingList.fulfilled, (state, action) => {
        state.isBatchPendingFetching = false;
        state.isBatchPendingFetched = true;
        state.batchPendingList = action.payload;
        state.fetchBatchPendingError = undefined;
      })
      .addCase(fetchBatchPendingList.rejected, (state, action) => {
        state.isBatchPendingFetching = false;
        state.isBatchPendingFetched = true;
        state.batchPendingList = [];
        state.fetchBatchPendingError = action.error.message;
      });
  },
});

export const { setCurrentBath } = slice.actions;

export default slice.reducer;
