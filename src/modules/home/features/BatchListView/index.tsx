'use client';

import { Flex } from '@chakra-ui/react';
import { useEffect, useMemo, useRef } from 'react';
import BatchPendingList from './components/BatchPendingList';
import BatchSkeletonList from './components/BatchSkeletonList/BatchSkeletonList';
import BatchSuccessList from './components/BatchSuccessList';

import { useBatchStore } from '@/hooks/useBatchStore';
import BlockDivider from './components/BlockDivider';
import s from './styles.module.scss';

const INTERVAL_TIMER = 10000; //10s

const BatchListView = () => {
  const {
    isFetchBatchPendingDone,
    isFetchBatchSuccessDone,
    batchData,
    fetchAllData,
  } = useBatchStore();

  const timerRef = useRef<any>();

  const isFetchDone = useMemo(
    () => isFetchBatchPendingDone && isFetchBatchSuccessDone,
    [isFetchBatchPendingDone, isFetchBatchSuccessDone],
  );

  console.log('LOG ----- ', {
    isFetchBatchPendingDone,
    isFetchBatchSuccessDone,
    batchData,
  });

  const clearTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = undefined;
  };

  useEffect(() => {
    fetchAllData();
    // timerRef.current = setInterval(() => {
    //   fetchAllData();
    // }, INTERVAL_TIMER);
    return () => {
      clearTimer();
    };
  }, []);

  const renderData = () => {
    return (
      <Flex flexDir={'row'} pos={'relative'} py={'30px'}>
        <BatchSuccessList />
        <BlockDivider />
        <BatchPendingList />
      </Flex>
    );
  };

  return (
    <Flex className={s.container}>
      {isFetchDone ? renderData() : <BatchSkeletonList />}
    </Flex>
  );
};

export default BatchListView;
