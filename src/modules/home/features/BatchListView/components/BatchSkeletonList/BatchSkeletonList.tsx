import { Flex } from '@chakra-ui/react';
import BatchSkeleton from './BatchSkeleton';
import BlockDivider from '../BlockDivider';
import { BATCH_PENDING_LIST, BATCH_SUCCESS_LIST } from '@/services/Batch/dummy';

export default () => {
  const batchSuccessList = BATCH_SUCCESS_LIST.map((item, index) => (
    <BatchSkeleton index={index} key={`${item.bitcoin_tx_hash}`} />
  ));
  const batchPendingList = BATCH_PENDING_LIST.map((item, index) => (
    <BatchSkeleton index={index} key={`${item.bitcoin_tx_hash}`} />
  ));

  return (
    <Flex
      w={'100dvw'}
      gap={'20px'}
      flexDir={'row'}
      justify={'center'}
      align={'center'}
      pos={'relative'}
      py={'30px'}
    >
      <Flex gap={'50px'}>{batchSuccessList}</Flex>

      <BlockDivider margin={20} />

      <Flex gap={'50px'}>{batchPendingList}</Flex>
    </Flex>
  );
};
