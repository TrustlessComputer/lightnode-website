'use client';

import { Flex, Image } from '@chakra-ui/react';
import s from './styles.module.scss';

type Props = {
  margin?: number;
};

const BlockDivider = (props: Props) => {
  const { margin = 35 } = props;
  return (
    <Flex
      px={'5px'}
      mt={'-35px'}
      mr={`${margin}px`}
      flexDir={'column'}
      align={'center'}
      gap={'10px'}
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
        minH={'185px'}
        borderRight="2px dashed white"
      ></Flex>
      <Image src={`/icons/ic-swap.svg`} w={'20px'} h={'20px'} />
    </Flex>
  );
};

export default BlockDivider;
