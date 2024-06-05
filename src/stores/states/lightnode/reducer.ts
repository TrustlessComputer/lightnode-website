import { IBatchData } from '@/services/Batch/type';
import { ILightNodeStatusResponse } from '@/services/LightNode/type';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchLightNodeStatus } from './actions';
import { ILightNodeState } from './types';

const initialState: ILightNodeState = {
  lightNodeStatus: {
    page: 0,
    per_page: 0,
    total: 0,
    total_pages: 0,
    data: [],
  },
  isLightNodeStatusFetching: false,
  isLightNodeStatusFetched: false,

  //LoadMore
  isLoadMore: false,
  totalBatches: 0,
  currentPage: 0,
  numberOfItems: 50,
};

const slice = createSlice({
  name: 'LIGHTNODE_STATE',
  initialState: initialState,
  reducers: {
    setCurrentBath: (
      state,
      action: PayloadAction<IBatchData | undefined>,
    ) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLightNodeStatus.pending, (state) => {
        state.isLightNodeStatusFetching = true;
      })
      .addCase(
        fetchLightNodeStatus.fulfilled,
        (state, action: PayloadAction<ILightNodeStatusResponse>) => {
          state.isLightNodeStatusFetching = false;
          state.isLightNodeStatusFetched = true;
          state.lightNodeStatus = {
            ...state.lightNodeStatus,
            data: [...state.lightNodeStatus.data, ...action.payload.data],
          };
          state.fetchLightNodeStatusError = undefined;
          state.currentPage = state.currentPage + 1;
        },
      )
      .addCase(fetchLightNodeStatus.rejected, (state, action) => {
        state.isLightNodeStatusFetching = false;
        state.isLightNodeStatusFetched = true;
      });
  },
});

export const { setCurrentBath } = slice.actions;

export default slice.reducer;
