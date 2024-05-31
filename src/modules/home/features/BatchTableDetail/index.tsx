'use client';

import { Box, Flex } from '@chakra-ui/react';
import { Grid, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import { useBatchStore } from '@/hooks/useBatchStore';
import s from './styles.module.scss';
import TableHeader from './components/TableHeader';
import TableRow from './components/TableRow';

const BatchTableDetail = () => {
  const {} = useBatchStore();

  return (
    <Flex className={s.container}>
      {/* Header */}
      <TableHeader />

      {/* Data Detail */}
      <SimpleGrid columns={2} spacing={'20px'}>
        <TableRow
          lable="Hash"
          content="00000000000000000001fc931645648e7e8e68707c071d84cedd4867a8570999"
          isOdd={false}
        />
        <TableRow lable="Fee span" content="14 - 123 sat/vB" isOdd={false} />
        <TableRow
          lable="Timestamp"
          content="2024-05-30 15:01:42 "
          isOdd={false}
        />
        <TableRow lable="Median fee" content="~16 sat/vB" isOdd={false} />
        <TableRow lable="Size" content="1.46 MB" isOdd={false} />
        <TableRow lable="Total fees" content="0.171 BTC" isOdd={false} />
      </SimpleGrid>
    </Flex>
  );
};

export default BatchTableDetail;
