import { BATCH_PENDING_LIST, BATCH_SUCCESS_LIST } from '@/services/Batch/dummy';
import { Flex } from '@chakra-ui/react';
import { useMemo } from 'react';
import BlockDivider from '../BlockDivider';
import BatchSkeleton from './BatchSkeleton';

export default () => {
  const batchSuccessList = useMemo(
    () => BATCH_SUCCESS_LIST.map(() => <BatchSkeleton />),
    [],
  );
  const batchPendingList = useMemo(
    () => BATCH_PENDING_LIST.map(() => <BatchSkeleton />),
    [],
  );

  return (
    <Flex
      w={'100dvw'}
      gap={'20px'}
      flexDir={'row'}
      justify={'center'}
      align={'center'}
      pos={'relative'}
      mx={'40px'}
      my={'10px'}
    >
      <Flex gap={'50px'}>{batchSuccessList}</Flex>

      <BlockDivider margin={20} />

      <Flex gap={'50px'}>{batchPendingList}</Flex>
    </Flex>
  );
};
