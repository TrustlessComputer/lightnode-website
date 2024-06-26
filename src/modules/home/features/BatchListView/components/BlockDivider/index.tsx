'use client';

import { Box, Flex, Image } from '@chakra-ui/react';

type Props = {
  margin?: number;
  dividerViewRef?: any;
};

const BlockDivider = (props: Props) => {
  const { margin = 35, dividerViewRef } = props;
  return (
    <>
      <Flex
        px={'5px'}
        mt={'-35px'}
        mr={`${margin}px`}
        flexDir={'column'}
        align={'center'}
        gap={'10px'}
        ref={dividerViewRef}
      >
        {/* <Image
          src={`/icons/ic-swap.svg`}
          w={'20px'}
          h={'20px'}
          className={s.icSwap}
        /> */}
        <Flex
          flex={1}
          w={'2px'}
          minH={'185px'}
          borderRight="2px dashed white"
        ></Flex>
        {/* <Image src={`/icons/ic-swap.svg`} w={'20px'} h={'20px'} /> */}
        <Box ref={dividerViewRef}></Box>
      </Flex>
    </>
  );
};

export default BlockDivider;
