import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchBatchPendingList, fetchBatchSuccessList } from './actions';
import { IBatch, IBatchState } from './types';

const initialState: IBatchState = {
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

export const {} = slice.actions;

export default slice.reducer;
