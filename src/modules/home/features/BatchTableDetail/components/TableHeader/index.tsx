'use client';

import { BITCOIN_EXPLORER_URL } from '@/config';
import { useAppSelector } from '@/stores';
import { getCurrentBatchSelectedSelector } from '@/stores/states/batch/selector';
import { Flex, Text, Image, Link } from '@chakra-ui/react';
import { useMemo } from 'react';

const TableHeader = () => {
  const currentBatchSelected = useAppSelector(getCurrentBatchSelectedSelector);

  const isQueued = useMemo(() => {
    return currentBatchSelected?.status === 'queued';
  }, [currentBatchSelected]);

  return (
    <Flex
      direction={'row'}
      align={'center'}
      gap={'10px'}
      fontSize={'30px'}
      mt={'20px'}
    >
      <Text color={'#fff'} fontWeight={600}>
        {'Batch: '}
      </Text>
      {currentBatchSelected?.batchNumber && (
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
          {`#${currentBatchSelected?.batchNumber}`}
        </Link>
      )}
      {/* <Image src={`/icons/arrow-right.svg`} height={'35px'} width={'auto'} /> */}
    </Flex>
  );
};

export default TableHeader;
