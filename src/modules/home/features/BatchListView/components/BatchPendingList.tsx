import { useAppSelector } from '@/stores';
import { queueJobSelector } from '@/stores/states/batch/selector';
import { Flex } from '@chakra-ui/react';
import BatchItem from './BatchView';
import { BatchStatusEnum } from '@/stores/states/batch/types';

const BatchPendingList = () => {
  const batchList = useAppSelector(queueJobSelector);
  return (
    <Flex flexDir={'row'} flex={1} gap={'20px'}>
      {batchList.map((item, index) => (
        <BatchItem
          key={`${item.batchNumber}-${index}`}
          data={item}
          index={index}
        />
      ))}
    </Flex>
  );
};

export default BatchPendingList;
