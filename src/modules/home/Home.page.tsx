'use client';

import { Flex } from '@chakra-ui/react';

import BatchListView from './features/BatchListView';
import BatchTableDetail from './features/BatchTableDetail';

const HomePage = () => {
  return (
    <Flex
      flexDir={'column'}
      minW={'90dvw'}
      bgColor={'black'}
      align={'center'}
      gap={'30px'}
    >
      <BatchListView />

      {/* White Break Line */}
      <Flex bgColor={'#fff'} maxW={'50%'} w={'50%'} h={'4px'} />

      {/* Table Detail content */}
      <BatchTableDetail />
    </Flex>
  );
};

export default HomePage;
