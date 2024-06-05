'use client';

import { Flex, Text, Box } from '@chakra-ui/react';

import BatchListView from './features/BatchListView';
import BatchTableDetail from './features/BatchTableDetail';
import s from './styles.module.scss';

const HomePage = () => {
  return (
    <Flex
      className={s.container}
      flexDir={'column'}
      bgColor={'black'}
      align={'center'}
      gap={'20px'}
    >
      <Flex
        className={s.title}
        bg={'#323656'}
        mt="30px"
        mx={'20px'}
        mb={'0px'}
        px="20px"
        py="30px"
        borderRadius={'8px'}
        alignSelf={'flex-start'}
      >
        <Text fontSize={'20px'} fontWeight={500} w={'70%'}>
          Light Nodes validate that (1) state transitions committed on DA layers
          by Bitcoin L3 Sequencers and (2) those committed on Bitcoin by the
          Supersonic Sequencer are accurate
        </Text>
      </Flex>

      <BatchListView />

      {/* White Break Line */}
      <Flex bgColor={'#fff'} maxW={'50%'} w={'50%'} h={'4px'} />

      {/* Table Detail content */}
      <BatchTableDetail />
    </Flex>
  );
};

export default HomePage;
