'use client';

import { Flex, Link, SimpleGrid, Text } from '@chakra-ui/react';
import TableHeader from './components/TableHeader';
import TableRow from './components/TableRow';
import s from './styles.module.scss';
import { useAppSelector } from '@/stores';
import { getCurrentBatchSelectedSelector } from '@/stores/states/batch/selector';
import { useMemo } from 'react';
import { formatAddressCenter } from '@/utils/string';
import { BITCOIN_EXPLORER_URL } from '@/config';

const BatchTableDetail = () => {
  const currentBatchSelected = useAppSelector(getCurrentBatchSelectedSelector);

  const isQueued = useMemo(() => {
    return currentBatchSelected?.status === 'queued';
  }, [currentBatchSelected]);

  const renderSuccessData = () => {
    return (
      <>
        <TableRow
          lable="Status"
          content={`${currentBatchSelected?.status}`}
          isOdd={false}
        />
        <TableRow
          lable="Reveal TxId"
          content={
            <Link
              color={'#1bd8f4'}
              fontWeight={600}
              target="_blank"
              onClick={() => {
                if (isQueued) {
                } else {
                  window.open(
                    `${BITCOIN_EXPLORER_URL}/tx/${currentBatchSelected?.revealTxId}`,
                  );
                }
              }}
            >
              {`${formatAddressCenter(currentBatchSelected?.revealTxId || '', 16)}`}
            </Link>
          }
          isOdd={true}
        />
      </>
    );
  };

  const rendeQueuedData = () => {
    if (!currentBatchSelected) return <></>;

    const { baseTxLength, proverJob, status } = currentBatchSelected;
    return (
      <>
        <TableRow lable="Status" content={`${status}`} isOdd={false} />
        <TableRow lable="Base Txs" content={`${baseTxLength}`} isOdd={false} />
        <TableRow
          lable="L1 Batch Number"
          content={`${proverJob?.l1_batch_number}`}
          isOdd={false}
        />
        <TableRow
          lable="Success"
          content={`${proverJob?.success}`}
          isOdd={false}
        />
        <TableRow
          lable="In Progress"
          content={`${proverJob?.in_progress}`}
          isOdd={false}
        />
        <TableRow
          lable="Queue"
          content={`${proverJob?.queued}`}
          isOdd={false}
        />
      </>
    );
  };

  return (
    <Flex className={s.container}>
      {/* Header */}
      <TableHeader />

      {/* Data Detail */}
      <SimpleGrid columns={2} spacing={'20px'} bgColor={'#24273e'} p="20px">
        {isQueued ? rendeQueuedData() : renderSuccessData()}
      </SimpleGrid>
    </Flex>
  );
};

export default BatchTableDetail;
