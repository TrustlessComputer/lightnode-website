'use client';

import { Flex, Container, Image, Box } from '@chakra-ui/react';
import s from './styles.module.scss';

type Props = {
  margin?: number;
};

export default (props: Props) => {
  const { margin = 35 } = props;
  return (
    <Flex
      px={'5px'}
      mt={'-35px'}
      mr={`${margin}px`}
      h={'195px'}
      flexDir={'column'}
      align={'center'}
      gap={'10px'}
      // bgColor={'yellow'}
    >
      <Image
        src={`/icons/ic-swap.svg`}
        w={'20px'}
        h={'20px'}
        className={s.icSwap}
      />
      <Flex
        flex={1}
        w={'2px'}
        h={'185px'}
        borderRight="2px dashed white"
      ></Flex>
      <Image src={`/icons/ic-swap.svg`} w={'20px'} h={'20px'} />
    </Flex>
  );
};
