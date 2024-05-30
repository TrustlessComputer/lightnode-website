import { Flex, Text, Box } from '@chakra-ui/react';
import s from './styles.module.scss';
import { IBatch } from '@/stores/states/batch/types';

type BlockProps = {
  data?: IBatch;
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
        {data?.label}
      </Text>
    </Flex>
  );
};

export default BatchFooter;
