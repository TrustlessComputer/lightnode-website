import { useAppDispatch, useAppSelector } from '@/stores';
import {
  fetchBatchPendingList,
  fetchBatchSuccessList,
  fetchBatchStatus,
} from '@/stores/states/batch/actions';
import {
  batchStateAllDataSelector,
  batchStateSelector,
} from '@/stores/states/batch/selector';
import { useMemo } from 'react';

export const useBatchStore = () => {
  const dispatch = useAppDispatch();
  const batchData = useAppSelector(batchStateSelector);
  const {
    isBatchPendingFetched,
    isBatchPendingFetching,
    isBatchSuccessFetched,
    isBatchSuccessFetching,
    isBatchStatusFetched,
    isBatchStatusFetching,
  } = batchData;

  const fetchBacthStatusData = async () => {
    dispatch(fetchBatchStatus());
  };

  const fetchBatchSuccess = async () => {
    dispatch(fetchBatchSuccessList());
  };

  const fetchBatchPending = async () => {
    dispatch(fetchBatchPendingList());
  };

  const fetchAllData = () => {
    dispatch(fetchBatchSuccessList());
    dispatch(fetchBatchPendingList());
  };

  const isFetchBatchSuccessDone = useMemo(() => {
    return !!isBatchSuccessFetched && !isBatchSuccessFetching;
  }, [isBatchSuccessFetched, isBatchSuccessFetching]);

  const isFetchBatchPendingDone = useMemo(() => {
    return !!isBatchPendingFetched && !isBatchPendingFetching;
  }, [isBatchPendingFetched, isBatchPendingFetching]);

  const isFetchBatchStatusDone = useMemo(() => {
    return !!isBatchStatusFetched;
  }, [isBatchStatusFetched]);

  return {
    batchData,
    isFetchBatchSuccessDone,
    isFetchBatchPendingDone,
    isFetchBatchStatusDone,
    dispatch,
    fetchBacthStatusData,
    fetchBatchSuccess,
    fetchBatchPending,
    fetchAllData,
  };
};
