import { BATCH_SUCCESS_LIST_V2 } from '@/services/Batch/dummy';
import { Flex } from '@chakra-ui/react';
import { useMemo } from 'react';
import BatchSkeleton from './BatchSkeleton';

export default () => {
  const batchSuccessList = useMemo(
    () => BATCH_SUCCESS_LIST_V2.map(() => <BatchSkeleton />),
    [],
  );
  return (
    <Flex
      ml="20px"
      gap={'20px'}
      flexDir={'row'}
      justify={'center'}
      align={'center'}
      pos={'relative'}
      pb={'30px'}
    >
      <Flex gap={'50px'}>{batchSuccessList}</Flex>
    </Flex>
  );
};
