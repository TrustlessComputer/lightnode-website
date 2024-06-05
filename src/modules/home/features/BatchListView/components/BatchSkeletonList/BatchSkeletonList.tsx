'use client';

import { BATCH_PENDING_LIST, BATCH_SUCCESS_LIST } from '@/services/Batch/dummy';
import BlockDivider from '../BlockDivider';
import BatchSkeleton from './BatchSkeleton';
import { Flex } from '@chakra-ui/react';

export default () => {
  return (
    <Flex
      w={'100dvw'}
      gap={'20px'}
      flexDir={'row'}
      justify={'center'}
      align={'center'}
      pos={'relative'}
      mx={'10px'}
      my={'20px'}
      py={'10px'}
    >
      <Flex gap={'50px'}>
        {BATCH_SUCCESS_LIST.map((item, index) => {
          return (
            <BatchSkeleton
              key={`${item.bitcoin_tx_hash}-${index}`}
            ></BatchSkeleton>
          );
        })}
      </Flex>

      <BlockDivider margin={20} />

      <Flex gap={'50px'}>
        {BATCH_PENDING_LIST.map((item, index) => (
          <BatchSkeleton key={`${item.bitcoin_tx_hash}-${index}`} />
        ))}
      </Flex>
    </Flex>
  );
};
