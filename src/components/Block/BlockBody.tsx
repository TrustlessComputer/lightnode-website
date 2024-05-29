import { Flex, Text } from '@chakra-ui/react';
import s from './styles.module.scss';
import { IBlock } from './type';
import { BlockEnum } from './constants';

type BlockProps = {
  data?: IBlock;
};

const BlockBody = (props: BlockProps) => {
  const { data } = props;

  if (!data) return null;

  const { blockType } = data;

  return (
    <Flex
      w={'155px'}
      h={'155px'}
      position={'relative'}
      className={s.block_container}
    >
      {/* Data Content */}
      <Flex
        display={'flex'}
        flexDir={'column'}
        align={'center'}
        textAlign={'center'}
        fontSize={'13px'}
        justify={'center'}
        w={'125px'}
        h={'125px'}
        className={
          blockType === BlockEnum.PENDING
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

export default BlockBody;
