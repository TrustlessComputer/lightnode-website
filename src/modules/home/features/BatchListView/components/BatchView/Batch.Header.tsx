import { IBatchData } from '@/services/Batch/type';
import { Flex, Text } from '@chakra-ui/react';

type BlockProps = {
  data?: IBatchData;
};

const BatchHeader = (props: BlockProps) => {
  const { data } = props;
  return (
    <Flex
      display={'flex'}
      position={'absolute'}
      mr={'40px'}
      top={'-50px'}
      p={'0px'}
      zIndex={3}
    >
      <Text color={'#1bd8f4'} fontWeight={700}>
        {`${data?.batchNumber || ''}`}
      </Text>
    </Flex>
  );
};

export default BatchHeader;
