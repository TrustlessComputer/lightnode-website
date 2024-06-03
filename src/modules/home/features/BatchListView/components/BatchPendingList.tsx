import { useAppSelector } from '@/stores';
import {
  queueJobPlaceHolderSelector,
  queueJobSelector,
} from '@/stores/states/batch/selector';
import { Flex } from '@chakra-ui/react';
import BatchItem from './BatchView';
import { BatchStatusEnum } from '@/stores/states/batch/types';

const BatchPendingList = () => {
  const batchList = useAppSelector(queueJobSelector);
  const batchListPlaceHolder = useAppSelector(queueJobPlaceHolderSelector);

  if (batchList && batchList.length < 1) {
    // return (
    //   <Flex flexDir={'row'} flex={1} gap={'20px'}>
    //     {batchListPlaceHolder.map((item, index) => (
    //       <BatchItem
    //         key={`${item.batchNumber}-${index}`}
    //         data={item}
    //         index={index}
    //       />
    //     ))}
    //   </Flex>
    // );

    return <></>;
  }

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
