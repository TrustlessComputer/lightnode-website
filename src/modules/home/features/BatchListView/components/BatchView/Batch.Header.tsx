import { IBatch } from '@/stores/states/batch/types';
import { Flex, Text } from '@chakra-ui/react';

type BlockProps = {
  data?: IBatch;
};

const BatchHeader = (props: BlockProps) => {
  const { data } = props;
  return (
    <Flex
      display={'flex'}
      position={'absolute'}
      mr={'40px'}
      top={'-60px'}
      p={'20px'}
      zIndex={3}
    >
      <Text color={'#1bd8f4'} fontWeight={700}>
        {/* {data?.l1BatchNumber} */}
        {data?.base_batch_number}
      </Text>
    </Flex>
  );
};

export default BatchHeader;
