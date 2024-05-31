'use client';

import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

type Props = {
  lable: string;
  content?: React.ReactNode;
  isOdd?: boolean;
};

const TableRow = (props: Props) => {
  const { lable, content } = props;

  return (
    <Flex
      flexDir={'row'}
      align={'center'}
      p={'16px'}
      justify={'space-between'}
      minH="50px"
      bgColor={'#181b2d'}
    >
      <Flex maxW={'40%'} justify={'flex-start'} align={'center'}>
        <Text fontSize={'14px'} fontWeight={500} color={'#fff'}>
          {lable}
        </Text>
      </Flex>

      <Flex
        maxW={'60%'}
        overflow={'hidden'}
        whiteSpace={'nowrap'}
        textOverflow={'ellipsis'}
        fontSize={'14px'}
        fontWeight={500}
        color={'#fff'}
        textAlign={'start'}
      >
        <Text>{content}</Text>
      </Flex>
    </Flex>
  );
};

export default TableRow;
