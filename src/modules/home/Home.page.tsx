'use client';

import { Flex } from '@chakra-ui/react';
import { BlocksView } from './features/Blocks';

const HomePage = () => {
  return (
    <Flex w={'100dvw'}>
      <BlocksView />
    </Flex>
  );
};

export default HomePage;
