import { Flex, Text, Box } from '@chakra-ui/react';
import s from './styles.module.scss';
import { IBlock } from './type';

type BlockProps = {
  data?: IBlock;
};

const BlockHeader = (props: BlockProps) => {
  const { data } = props;
  return (
    <Flex>
      <Text color={'#1bd8f4'} fontWeight={700}>
        {data?.l1BatchNumber}
      </Text>
    </Flex>
  );
};

export default BlockHeader;
