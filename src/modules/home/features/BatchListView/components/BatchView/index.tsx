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
import { BITCOIN_EXPLORER_URL } from '@/config';

type BlockProps = {
  data?: IBatchData;
  index: number;
};

const BatchItem = (props: BlockProps) => {
  const { data, index } = props;

  const dispatch = useAppDispatch();
  const currentBatch = useAppSelector(getCurrentBatchSelectedSelector);

  if (!data) return null;
  const { status } = data;

  const isQueue = useMemo(() => {
    return status === 'queued';
  }, [status]);

  const isCurrentBlock = useMemo(() => {
    return currentBatch?.batchNumber === data.batchNumber;
  }, [currentBatch, data]);

  const blockOnClickHandler = (data: IBatchData) => {
    if (isQueue) {
    } else {
      // window.open(`${BITCOIN_EXPLORER_URL}/tx/${data.revealTxId}`, '_blank');
    }
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
      {<BatchFooter data={data} />}
      {isCurrentBlock && <BatchAnchor />}
    </Flex>
  );
};

export default BatchItem;
