'use client';

import { Flex } from '@chakra-ui/react';
import { createRef, useEffect, useMemo, useRef } from 'react';
import BatchPendingList from './components/BatchPendingList';
import BatchSkeletonList from './components/BatchSkeletonList/BatchSkeletonList';
import BatchSuccessList from './components/BatchSuccessList';

import { useBatchStore } from '@/hooks/useBatchStore';
import BlockDivider from './components/BlockDivider';
import s from './styles.module.scss';
import { setCurrentBath } from '@/stores/states/batch/reducer';
import { useAppSelector } from '@/stores';
import {
  getBatchLastedSuccessSelector,
  getCurrentBatchSelectedSelector,
} from '@/stores/states/batch/selector';

const INTERVAL_TIMER = 10000; //10s

const BatchListView = () => {
  const {
    isFetchBatchPendingDone,
    isFetchBatchSuccessDone,
    isFetchBatchStatusDone,
    batchData,
    fetchAllData,
    fetchBacthStatusData,
    dispatch,
  } = useBatchStore();

  const lastItem = useAppSelector(getBatchLastedSuccessSelector);
  const currentBatchSelected = useAppSelector(getCurrentBatchSelectedSelector);

  const timerRef = useRef<any>();

  const dividerViewRef = createRef<HTMLElement>();

  // const isFetchDone = useMemo(
  //   () => isFetchBatchPendingDone && isFetchBatchSuccessDone,
  //   [isFetchBatchPendingDone, isFetchBatchSuccessDone],
  // );

  const clearTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = undefined;
  };

  useEffect(() => {
    fetchBacthStatusData();
    timerRef.current = setInterval(() => {
      fetchBacthStatusData();
    }, INTERVAL_TIMER);
    return () => {
      clearTimer();
    };
  }, []);

  useEffect(() => {
    if (isFetchBatchStatusDone) {
      setTimeout(() => {
        dividerViewRef?.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
      }, 500);
    }
  }, [isFetchBatchStatusDone, dividerViewRef]);

  useEffect(() => {
    if (isFetchBatchStatusDone) {
      if (!currentBatchSelected) {
        dispatch(setCurrentBath(lastItem));
      }
    }
  }, [isFetchBatchStatusDone, lastItem, currentBatchSelected]);

  const renderData = () => {
    return (
      <Flex flexDir={'row'} pos={'relative'} py={'40px'}>
        <BatchPendingList />
        <BlockDivider dividerViewRef={dividerViewRef} />
        <BatchSuccessList />
      </Flex>
    );
  };

  return (
    <Flex className={s.container}>
      {isFetchBatchStatusDone ? renderData() : <BatchSkeletonList />}
    </Flex>
  );
};

export default BatchListView;
