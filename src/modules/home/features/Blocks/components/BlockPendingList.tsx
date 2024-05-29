import { Flex } from '@chakra-ui/react';
import Block from '@/components/Block';
import { BLOCK_PENDING_DUMMY_LIST } from './Blocks.constants';

export default () => {
  return (
    <Flex flexDir={'row'} flex={1} gap={'20px'}>
      {BLOCK_PENDING_DUMMY_LIST.map((item) => (
        <Block data={item} />
      ))}
    </Flex>
  );
};
