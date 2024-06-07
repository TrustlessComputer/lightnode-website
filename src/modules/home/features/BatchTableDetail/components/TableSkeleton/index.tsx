'use client';

import { Flex, SimpleGrid, Skeleton } from '@chakra-ui/react';

const TableSkeleton = () => {
  return (
    <Flex flexDir={'column'} mt={'30px'}>
      <Skeleton width={'200px'} height={'30px'} />
      <SimpleGrid
        mt={'30px'}
        columns={2}
        spacing={'40px'}
        bgColor={'#24273e'}
        p="20px"
      >
        <Skeleton width={'100%'} height={'30px'} />
        <Skeleton width={'100%'} height={'30px'} />
        <Skeleton width={'100%'} height={'30px'} />
        <Skeleton width={'100%'} height={'30px'} />
      </SimpleGrid>
    </Flex>
  );
};

export default TableSkeleton;
