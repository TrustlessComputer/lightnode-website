import { Flex } from '@chakra-ui/react';
import Block from '@/components/Block';
import { BLOCK_SUCCESS_DUMMY_LIST } from './Blocks.constants';

const BlockSuccessList = () => {
  return (
    <Flex flexDir={'row'} flex={1} gap={'20px'}>
      {BLOCK_SUCCESS_DUMMY_LIST.map((item) => (
        <Block data={item} />
      ))}
    </Flex>
  );
};

export default BlockSuccessList;
