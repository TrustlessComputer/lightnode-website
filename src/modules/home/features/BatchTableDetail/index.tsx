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

  const isEmpty = useMemo(() => {
    return currentBatchSelected?.isEmpty;
  }, [currentBatchSelected]);

  const renderSuccessData = () => {
    return (
      <>
        <TableRow
          lable="Verified by Light Node"
          content={
            <Text
              fontSize={'15px'}
              fontWeight={600}
              textTransform={'capitalize'}
              color={isQueued ? '#febc06' : '#3cdb1c'}
            >
              {`${currentBatchSelected?.status}`}
            </Text>
          }
        />
        <TableRow
          lable="Inscribed on Bitcoin at"
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
              {`${formatAddressCenter(currentBatchSelected?.revealTxId || '', 7)}`}
            </Link>
          }
          isOdd={true}
        />
        <TableRow
          lable="Number of transactions:"
          content={
            <Text fontSize={'15px'} fontWeight={600}>
              {`${currentBatchSelected?.baseTxLength}`}
            </Text>
          }
        />
        <TableRow
          lable="Stored on DA at"
          content={
            <Text fontSize={'15px'} fontWeight={600}>
              {``}
            </Text>
          }
        />
      </>
    );
  };

  const rendeQueuedData = () => {
    if (!currentBatchSelected) return <></>;

    const { baseTxLength, proverJob, status } = currentBatchSelected;
    return (
      <>
        <TableRow
          lable="Verified by Light Node"
          content={
            <Text
              fontSize={'15px'}
              fontWeight={500}
              color={isQueued ? '#febc06' : '#3cdb1c'}
            >
              {`${status}`}
            </Text>
          }
        />
        <TableRow lable="Base Txs" content={`${baseTxLength}`} isOdd={false} />
        <TableRow
          lable="L1 Batch Number"
          content={`${proverJob?.l1_batch_number}`}
        />
        <TableRow lable="Success" content={`${proverJob?.success}`} />
        <TableRow lable="In Progress" content={`${proverJob?.in_progress}`} />
        <TableRow lable="Queue" content={`${proverJob?.queued}`} />
      </>
    );
  };

  if (isEmpty) return null;

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