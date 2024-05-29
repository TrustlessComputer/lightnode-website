'use client';

import { useBatchStatus } from '@/hooks/useBatchStatus';
import { Flex } from '@chakra-ui/react';
import s from './styles.module.scss';
import BlocksDivider from './components/BlocksDivider';
import BlockPendingList from './components/BlockPendingList';
import BlockSkeletonList from './components/BlockSkeletonList';
import React, { useEffect, useState } from 'react';
import BlockSuccessList from './components/BlockSuccessList';

const BlocksListView = () => {
  const { isLoading, data } = useBatchStatus({
    fetchNow: true,
  });

  const [delay, setDelay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDelay(false);
    }, 1000);
  }, []);

  const renderLoading = () => {
    return <BlockSkeletonList />;
  };

  const renderData = () => {
    if (!data) return null;

    return (
      <Flex>
        <BlockSuccessList />
        <BlocksDivider />
        <BlockPendingList />
      </Flex>
    );
  };

  return (
    <Flex w={'100dvw'} gap={'20px'} py="60px" px={'80px'} overflowX={'scroll'}>
      {isLoading || delay ? renderLoading() : renderData()}
    </Flex>
  );
};

export default BlocksListView;
