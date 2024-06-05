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
import { getLightNodeInforByBatchID } from '@/stores/states/lightnode/selector';

const BatchTableDetail = () => {
  const currentBatchSelected = useAppSelector(getCurrentBatchSelectedSelector);

  const lightNodeInfor = useAppSelector(getLightNodeInforByBatchID)(
    currentBatchSelected?.batchNumber!,
  );

  const isQueued = useMemo(() => {
    return currentBatchSelected?.status === 'queued';
  }, [currentBatchSelected]);

  const isSuccess = useMemo(() => {
    return currentBatchSelected?.status === 'success';
  }, [currentBatchSelected]);

  const renderSuccessData = () => {
    return (
      <>
        <TableHeader />
        {/* Data Detail */}
        <SimpleGrid columns={2} spacing={'20px'} bgColor={'#24273e'} p="20px">
          <TableRow
            lable="Status"
            content={
              <Text
                fontSize={'15px'}
                fontWeight={600}
                textTransform={'capitalize'}
                color={isQueued ? '#febc06' : '#3cdb1c'}
              >
                {/* {`${currentBatchSelected?.status}`} */}
                {'Verified by Light Node'}
              </Text>
            }
          />
          <TableRow
            lable="Inscribed on Bitcoin at:"
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
          {isSuccess && (
            <TableRow
              lable="Stored on DA at:"
              content={
                <Link
                  color={'#1bd8f4'}
                  fontWeight={600}
                  target="_blank"
                  onClick={() => {
                    if (isQueued) {
                    } else {
                      window.open(
                        `https://amoy.polygonscan.com/tx/${lightNodeInfor?.da_tx_hash}`,
                      );
                    }
                  }}
                >
                  {`${formatAddressCenter(lightNodeInfor?.da_tx_hash || '', 7)}`}
                </Link>
              }
            />
          )}
        </SimpleGrid>
      </>
    );
  };

  const rendeQueuedData = () => {
    if (!currentBatchSelected) return <></>;

    const { baseTxLength, proverJob, status } = currentBatchSelected;
    return (
      <>
        <TableHeader />
        <SimpleGrid columns={2} spacing={'20px'} bgColor={'#24273e'} p="20px">
          <TableRow
            lable="Status"
            content={
              <Text
                fontSize={'15px'}
                fontWeight={500}
                textTransform={'capitalize'}
                color={isQueued ? '#febc06' : '#3cdb1c'}
              >
                {`${status}`}
              </Text>
            }
          />
          <TableRow
            lable="Base Txs"
            content={`${baseTxLength}`}
            isOdd={false}
          />
          {/* <TableRow
            lable="L1 Batch Number"
            content={`${proverJob?.l1_batch_number}`}
          />
          <TableRow lable="Success" content={`${proverJob?.success}`} />
          <TableRow lable="In Progress" content={`${proverJob?.in_progress}`} />
          <TableRow lable="Queue" content={`${proverJob?.queued}`} /> */}
        </SimpleGrid>
        <Text fontSize={'30px'} color={'#fff'} fontWeight={600}>
          {'Prove Status: '}
        </Text>

        <SimpleGrid columns={2} spacing={'20px'} bgColor={'#24273e'} p="20px">
          <TableRow
            lable="Prove Status"
            content={
              <Text
                fontSize={'15px'}
                fontWeight={600}
                textTransform={'capitalize'}
                color={'#f1ff30'}
              >
                {`${currentBatchSelected?.proverJob?.compression_status}`}
              </Text>
            }
          />
          <TableRow
            lable="In Progress"
            content={`${currentBatchSelected?.proverJob?.in_progress}`}
          />
          <TableRow
            lable="Queued"
            content={`${currentBatchSelected?.proverJob?.queued}`}
          />
          <TableRow
            lable="Success"
            content={`${currentBatchSelected?.proverJob?.success}`}
          />
        </SimpleGrid>
      </>
    );
  };

  return (
    <Flex className={s.container}>
      {/* Header */}
      {isQueued ? rendeQueuedData() : renderSuccessData()}

      {/* <SimpleGrid columns={2} spacing={'20px'} bgColor={'#24273e'} p="20px">
        {isQueued ? rendeQueuedData() : renderSuccessData()}
      </SimpleGrid> */}
    </Flex>
  );
};

export default BatchTableDetail;
