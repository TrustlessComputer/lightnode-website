import { BatchStatusEnum, IBatch } from '@/stores/states/batch/types';
import { Flex, Text } from '@chakra-ui/react';
import s from './styles.module.scss';

type BlockProps = {
  data?: IBatch;
};

const BatchBody = (props: BlockProps) => {
  const { data } = props;

  if (!data) return null;

  const { status } = data;

  return (
    <Flex position={'relative'} className={s.block_container} zIndex={2}>
      <Flex
        display={'flex'}
        flexDir={'column'}
        align={'center'}
        textAlign={'center'}
        fontSize={'13px'}
        justify={'center'}
        className={
          status === BatchStatusEnum.PENDING
            ? s.backgroundColor_pending
            : s.backgroundColor_success
        }
      >
        <Text>~9 sat/vB</Text>
        <Text color={'#ffe205'} fontWeight={700}>
          8-402 sat/vB
        </Text>
        <Text fontSize={'15px'} fontWeight={600}>
          1.68MB
        </Text>
        <Text>3,874 transactions</Text>
        <Text>12 minutes ago</Text>
      </Flex>
    </Flex>
  );
};

export default BatchBody;
