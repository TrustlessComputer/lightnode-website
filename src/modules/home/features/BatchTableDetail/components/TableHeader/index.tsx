'use client';

import { Flex, Text } from '@chakra-ui/react';

const TableHeader = () => {
  return (
    <Flex direction={'row'} align={'center'}>
      <Text fontSize={'20px'} color={'#fff'} fontWeight={600}>
        {'TODO'}
      </Text>
    </Flex>
  );
};

export default TableHeader;
