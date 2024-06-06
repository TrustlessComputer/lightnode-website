import { IBatchData } from '@/services/Batch/type';
import { RootState } from '@/stores';
import { createSelector } from '@reduxjs/toolkit';

export const lightNodeStateSelector = (state: RootState) => state.lightnode;

export const getBatchLastedItem = createSelector(
  lightNodeStateSelector,
  (state) => {
    const { data = [] } = state.lightNodeStatus;
    return data[0];
  },
);

export const getLightNodeBatchIDsSelector = createSelector(
  lightNodeStateSelector,
  (state) => {
    const { data = [] } = state.lightNodeStatus;
    return data.map((item) => item?.base_batch_number);
  },
);

export const getLightNodeInforByBatchID = createSelector(
  lightNodeStateSelector,
  (state) => (batchNumber: string | number) => {
    const { data = [] } = state.lightNodeStatus;
    return data.find((item) => item?.base_batch_number === batchNumber);
  },
);

export const getBatchStatusFactoryByBatchObj = createSelector(
  getBatchLastedItem,
  (lastedItem) => (bathObj: IBatchData) => {
    const batchNumberLasted = Number(lastedItem?.base_batch_number);
    const batchNumberCurrent = Number(bathObj.batchNumber);

    let statusStr = '';
    if (batchNumberCurrent > batchNumberLasted) {
      if (bathObj?.status === 'queued') {
        statusStr = 'Queued';
      } else {
        statusStr = 'Confirming';
      }
    } else {
      statusStr = 'Success';
    }

    return { statusStr };
  },
);
