'use client';

import { Flex } from '@chakra-ui/react';
import BatchListView from './features/BatchListView';

const HomePage = () => {
  return (
    <Flex
      minW={'90dvw'}
      minH={'100dvh'}
      bgColor={'black'}
      css={{
        '&::-webkit-scrollbar': {
          width: '0px',
        },
        '&::-webkit-scrollbar-track': {
          width: '0px',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '0px',
        },
      }}
    >
      <BatchListView />
    </Flex>
  );
};

export default HomePage;
