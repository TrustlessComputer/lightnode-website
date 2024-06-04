// import l2ServicesAPI from '@/services/api/l2services';
import LightNodeAPI, { IGetLightNodeStatus } from '@/services/LightNode';
import { ILightNodeStatusResponse } from '@/services/LightNode/type';
import { RootState } from '@/stores';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchLightNodeStatus = createAsyncThunk(
  `BATCH_STATE/fetchLightNodeStatus`,
  async (_, { dispatch, getState }) => {
    try {
      const rootState = getState() as RootState;
      const { lightnode } = rootState;

      const params: IGetLightNodeStatus = {
        numberOfItems: lightnode.numberOfItems,
        currentPage: lightnode.currentPage + 1,
      };

      const data: ILightNodeStatusResponse =
        await LightNodeAPI.getStatus(params);
      return data;
    } catch (error) {
      throw error;
    }
  },
);

export { fetchLightNodeStatus };
