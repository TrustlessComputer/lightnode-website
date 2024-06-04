import { RootState } from '@/stores';
import { createSelector } from '@reduxjs/toolkit';
import { orderBy, uniqBy } from 'lodash';

export const batchStateSelector = (state: RootState) => state.batch;

export const getCurrentBatchSelectedSelector = createSelector(
  batchStateSelector,
  (state) => {
    return state.currentBatchSelect;
  },
);

export const queueJobSelector = createSelector(batchStateSelector, (state) => {
  const { queuedJob = [] } = state.batchStatus;

  let queuedJobSortedList = orderBy(
    queuedJob,
    (item) => Number(item.batchNumber),
    ['desc'],
  );
  // console.log('queuedJobSortedList ', queuedJobSortedList);
  return queuedJobSortedList;
});

export const pendingJobSelector = createSelector(
  batchStateSelector,
  (state) => {
    const { pendingJob = [] } = state.batchStatus;
    return orderBy(pendingJob, ['batchNumber'], ['desc']);
  },
);

export const sendingJobSelector = createSelector(
  batchStateSelector,
  (state) => {
    const { sendingJob = [] } = state.batchStatus;
    return orderBy(sendingJob, ['batchNumber'], ['desc']);
  },
);

export const successJobSelector = createSelector(
  batchStateSelector,
  (state) => {
    const { successJob = [] } = state.batchStatus;
    return orderBy(successJob, ['batchNumber'], ['desc']);
  },
);

export const batchSuccessSelector = createSelector(
  batchStateSelector,
  (state) => {
    const {
      pendingJob = [],
      sendingJob = [],
      successJob = [],
    } = state.batchStatus;

    let batchList = [...pendingJob, ...sendingJob, ...successJob];
    let batchSortedList = orderBy(
      batchList,
      (item) => Number(item.batchNumber),
      ['desc'],
    );
    let batchUniq = uniqBy(batchSortedList, 'batchNumber');
    // console.log('batchSortedList ', batchSortedList);
    return batchUniq;
  },
);

export const getBatchLastedSuccessSelector = createSelector(
  batchSuccessSelector,
  (data) => {
    return data[0];
  },
);

export const loadMoreSelector = createSelector(batchStateSelector, (data) => {
  const { isLoadMore, currentPage, totalBatches, numberOfItems, batchStatus } =
    data;

  const { sending, pending, success, queued } = batchStatus;
  const currentTotalItem = sending + pending + success + queued;
  const canLoreMore = currentTotalItem < totalBatches;

  return {
    isLoadMore,
    canLoreMore,
  };
});

export const batchStateAllDataSelector = createSelector(
  [
    batchStateSelector,
    queueJobSelector,
    pendingJobSelector,
    sendingJobSelector,
    successJobSelector,
  ],
  (
    state,
    queueJobWrapper,
    pendingJobWrapper,
    sendingJobWrapper,
    successJobWrapper,
  ) => {
    const batchFINAL =
      pendingJobWrapper || sendingJobWrapper || successJobWrapper;
    const batchQUEUE = queueJobWrapper;
    return {
      ...state,
      queueJobSorted: queueJobWrapper,
      pendingJobSorted: pendingJobWrapper,
      sendingJobSorted: sendingJobWrapper,
      successJobSorted: successJobWrapper,
      batchFINAL,
      batchQUEUE,
    };
  },
);
