import { useBatchStore } from '@/hooks/useBatchStore';
import { Flex } from '@chakra-ui/react';
import BatchView from './BatchView';

const BatchPendingList = () => {
  const { batchData } = useBatchStore();
  const { batchPendingList = [] } = batchData;
  return (
    <Flex flexDir={'row'} flex={1} gap={'20px'}>
      {batchPendingList.map((item, index) => (
        <BatchView
          key={`${item.bitcoin_tx_hash}-${index}`}
          data={item}
          index={index}
        />
      ))}
    </Flex>
  );
};

export default BatchPendingList;
