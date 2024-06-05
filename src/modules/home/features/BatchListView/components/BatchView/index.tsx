import { IBatchData } from '@/services/Batch/type';
import { Flex } from '@chakra-ui/react';
import { useMemo } from 'react';
import BatchBody from './Batch.Body';
import BatchFooter from './Batch.Footer';
import BatchHeader from './Batch.Header';
import { useAppDispatch, useAppSelector } from '@/stores';
import { setCurrentBath } from '@/stores/states/batch/reducer';
import { getCurrentBatchSelectedSelector } from '@/stores/states/batch/selector';
import BatchAnchor from './Batch.Anchor';
import { getBatchStatusFactoryByBatchObj } from '@/stores/states/lightnode/selector';

type BlockProps = {
  data?: IBatchData;
  index: number;
};

const BatchItem = (props: BlockProps) => {
  const { data, index } = props;

  const dispatch = useAppDispatch();
  const currentBatch = useAppSelector(getCurrentBatchSelectedSelector);
  const { statusStr } = useAppSelector(getBatchStatusFactoryByBatchObj)(data!);

  if (!data) return null;
  const { status } = data;

  const isCurrentBlock = useMemo(() => {
    return currentBatch?.batchNumber === data?.batchNumber;
  }, [currentBatch, data]);

  const blockOnClickHandler = (data: IBatchData) => {
    dispatch(setCurrentBath(data));
  };

  return (
    <Flex
      flexDir={'column'}
      pos={'relative'}
      align={'center'}
      justify={'center'}
      key={index}
    >
      {<BatchHeader data={data} />}
      <BatchBody data={data} blockOnClick={blockOnClickHandler} />
      {<BatchFooter text={statusStr} />}
      {isCurrentBlock && <BatchAnchor />}
    </Flex>
  );
};

export default BatchItem;
