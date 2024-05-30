import { BatchStatusEnum, IBatch } from '@/stores/states/batch/types';
import { Flex } from '@chakra-ui/react';
import BatchBody from './Batch.Body';
import BatchFooter from './Batch.Footer';
import BatchHeader from './Batch.Header';

type BlockProps = {
  data?: IBatch;
  index: number;
};

const BatchItem = (props: BlockProps) => {
  const { data, index } = props;

  if (!data) return null;

  const { status } = data;
  return (
    <Flex
      flexDir={'column'}
      pos={'relative'}
      align={'center'}
      justify={'center'}
      key={index}
    >
      {status === BatchStatusEnum.SUCCESS && <BatchHeader data={data} />}
      <BatchBody data={data} />
      {status === BatchStatusEnum.SUCCESS && <BatchFooter data={data} />}
    </Flex>
  );
};

export default BatchItem;
