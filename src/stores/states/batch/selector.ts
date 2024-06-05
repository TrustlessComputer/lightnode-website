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
