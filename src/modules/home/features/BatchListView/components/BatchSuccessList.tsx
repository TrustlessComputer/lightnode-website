import { useAppSelector } from '@/stores';
import { batchSuccessSelector } from '@/stores/states/batch/selector';
import { Flex } from '@chakra-ui/react';
import BatchView from './BatchView';

const BlockSuccessList = () => {
  const batchList = useAppSelector(batchSuccessSelector);

  if (!batchList || batchList.length < 1) {
    return <></>;
  }

  return (
    <Flex flexDir={'row'} flex={1} gap={'20px'}>
      {batchList.map((item, index) => (
        <BatchView
          key={`${item.batchNumber}-${index}`}
          data={item}
          index={index}
        />
      ))}
    </Flex>
  );
};

export default BlockSuccessList;
