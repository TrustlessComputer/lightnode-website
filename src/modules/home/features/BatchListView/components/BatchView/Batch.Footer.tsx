import { IBatchData } from '@/services/Batch/type';
import { Flex, Text } from '@chakra-ui/react';

type BlockProps = {
  data?: IBatchData;
};

const BatchFooter = (props: BlockProps) => {
  const { data } = props;
  return (
    <Flex
      position={'absolute'}
      mt={'150px'}
      mr={'40px'}
      alignSelf={'center'}
      justify={'center'}
      align={'center'}
      zIndex={1}
    >
      <Text
        bgColor={'#344b9f'}
        borderRadius={'4px'}
        py={'3px'}
        px="6px"
        color={'#fff'}
        fontWeight={600}
        fontSize={'12px'}
      >
        {data?.status}
      </Text>
    </Flex>
  );
};

export default BatchFooter;
