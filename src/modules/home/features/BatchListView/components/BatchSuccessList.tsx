import { useBatchStore } from '@/hooks/useBatchStore';
import { Flex } from '@chakra-ui/react';
import BatchView from './BatchView';

const BlockSuccessList = () => {
  const { batchData } = useBatchStore();
  const { batchSuccessList = [] } = batchData;
  return (
    <Flex flexDir={'row'} flex={1} gap={'20px'}>
      {batchSuccessList.map((item, index) => (
        <BatchView
          key={`${item.bitcoin_tx_hash}-${index}`}
          data={item}
          index={index}
        />
      ))}
    </Flex>
  );
};

export default BlockSuccessList;
