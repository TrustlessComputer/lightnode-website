'use client';

import { Flex } from '@chakra-ui/react';
import { createRef, useEffect, useRef } from 'react';
import BatchPendingList from './components/BatchPendingList';
import BatchSkeletonList from './components/BatchSkeletonList/BatchSkeletonList';
import BatchSuccessList from './components/BatchSuccessList';

import { useBatchStore } from '@/hooks/useBatchStore';
import { useAppSelector } from '@/stores';
import { setCurrentBath, setLoadMore } from '@/stores/states/batch/reducer';
import {
  getBatchLastedSuccessSelector,
  getCurrentBatchSelectedSelector,
  loadMoreSelector,
} from '@/stores/states/batch/selector';
import BatchSkeletonLoadingList from './components/BatchSkeletonList/BatchSkeletonLoadingList';
import BlockDivider from './components/BlockDivider';
import s from './styles.module.scss';
import { useLightNode } from '@/hooks/useLightNode';

const DISTANCE_NEAR_BOTTOM = 100;

const BatchListView = () => {
  const { isFetchBatchStatusDone, fetchBacthStatusData, dispatch } =
    useBatchStore();
  const { fetchLightNodeStatusData } = useLightNode();

  const { canLoreMore, isLoadMore } = useAppSelector(loadMoreSelector);
  const lastItem = useAppSelector(getBatchLastedSuccessSelector);
  const currentBatchSelected = useAppSelector(getCurrentBatchSelectedSelector);

  const listInnerRef = useRef<any>();

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = listInnerRef.current;
      const isNearBottom =
        scrollLeft + clientWidth + DISTANCE_NEAR_BOTTOM >= scrollWidth;
      if (isNearBottom) {
        // console.log('--> isNearBottom');
        // console.log('--> isLoadMore: ', isLoadMore);
        // console.log('--> canLoreMore: ', canLoreMore);
        if (!isLoadMore && canLoreMore) {
          dispatch(setLoadMore(true));

          setTimeout(() => {
            fetchBacthStatusData();
          }, 500);
        }
      } else {
      }
    }
  };

  useEffect(() => {
    const listInnerElement = listInnerRef.current;

    if (listInnerElement) {
      listInnerElement?.addEventListener('scroll', onScroll);

      // Clean-up
      return () => {
        listInnerElement?.removeEventListener('scroll', onScroll);
      };
    }
  }, [isLoadMore, canLoreMore, dispatch]);

  useEffect(() => {
    fetchBacthStatusData();
    fetchLightNodeStatusData();
  }, []);

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
        <BlockDivider />
        <BatchSuccessList />
        {isLoadMore && <BatchSkeletonLoadingList />}
      </Flex>
    );
  };

  return (
    <div className={s.container} ref={listInnerRef}>
      {isFetchBatchStatusDone ? renderData() : <BatchSkeletonList />}
    </div>
  );
};

export default BatchListView;
