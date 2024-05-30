import { useAppDispatch, useAppSelector } from '@/stores';
import {
  fetchBatchPendingList,
  fetchBatchSuccessList,
} from '@/stores/states/batch/actions';
import { batchStateAllDataSelector } from '@/stores/states/batch/selector';
import { useMemo } from 'react';

export const useBatchStore = () => {
  const dispatch = useAppDispatch();
  const batchData = useAppSelector(batchStateAllDataSelector);
  const {
    isBatchPendingFetched,
    isBatchPendingFetching,
    isBatchSuccessFetched,
    isBatchSuccessFetching,
  } = batchData;

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

  return {
    batchData,
    isFetchBatchSuccessDone,
    isFetchBatchPendingDone,
    dispatch,
    fetchBatchSuccess,
    fetchBatchPending,
    fetchAllData,
  };
};
