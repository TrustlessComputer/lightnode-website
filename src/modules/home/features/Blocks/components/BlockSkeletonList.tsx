import { Flex } from '@chakra-ui/react';
import BlockSkeleton from './BlockSkeleton';
import BlocksDivider from './BlocksDivider';

export default () => {
  return (
    <Flex w={'100dvw'} gap={'20px'} justify={'center'} align={'center'}>
      <Flex gap={'30px'}>
        {new Array(5).fill(0).map((_) => (
          <BlockSkeleton />
        ))}
      </Flex>

      <BlocksDivider margin={20} />

      <Flex gap={'30px'}>
        {new Array(5).fill(0).map((_) => (
          <BlockSkeleton />
        ))}
      </Flex>
    </Flex>
  );
};
