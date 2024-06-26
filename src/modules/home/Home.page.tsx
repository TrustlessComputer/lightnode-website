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
    >
      <Flex
        className={s.title}
        flexDir={'column'}
        bg={'#323656'}
        mt="30px"
        mx={'20px'}
        gap={'8px'}
        mb={'30px'}
        p={'20px'}
        maxW={'50%'}
        width={'50%'}
        borderRadius={'8px'}
        alignSelf={'center'}
        textAlign={'left'}
      >
        <Text fontSize={'18px'} fontWeight={600} w={'100%'}>
          {`How it works:`}
        </Text>
        <Text fontSize={'14px'} fontWeight={400} w={'100%'} opacity={0.6}>
          {`Light nodes validate that the state transitions of Bitcoin L3s and Supersonic, committed on the Bitcoin and DA layers, are accurate.`}
        </Text>
      </Flex>

      <BatchListView />

      {/* White Break Line */}
      <Flex
        bgColor={'#fff'}
        maxW={'50%'}
        w={'50%'}
        h={'4px'}
        marginTop={'-20px'}
      />

      {/* Table Detail content */}
      <BatchTableDetail />
    </Flex>
  );
};

export default HomePage;
