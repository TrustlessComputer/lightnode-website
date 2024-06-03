import { IBatchData } from '@/services/Batch/type';
import { Flex, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import s from './styles.module.scss';
import { formatAddressCenter } from '@/utils/string';

type BlockProps = {
  data?: IBatchData;
  blockOnClick: (item: IBatchData) => void;
};

const BatchBody = (props: BlockProps) => {
  const { data, blockOnClick } = props;

  if (!data) return null;

  const { status, revealTxId, baseTxLength, proverJob, isEmpty } = data;

  const isQueue = useMemo(() => {
    return status === 'queued';
  }, [status]);

  const renderSuccessData = () => {
    return (
      <>
        <Text color={'#ffe205'} fontWeight={700} textTransform={'capitalize'}>
          {`Verified by Light Node:`}
          <Text color={'#ffe205'} fontWeight={700} fontSize={'14px'}>
            {`${formatAddressCenter(revealTxId || '', 6)}`}
          </Text>
        </Text>
      </>
    );
  };

  const renderQueueData = () => {
    if (isEmpty)
      return (
        <Text color={'#fff'} fontWeight={700}>
          {`Empty`}
        </Text>
      );
    return (
      <Flex flexDir={'column'} gap={'3px'}>
        <Text color={'#fff'} fontWeight={700}>
          {`baseTxLength: ${baseTxLength}`}
        </Text>
        {/* <Text color={'#fff'} fontWeight={700}>
          {`l1_batch_number: ${proverJob?.l1_batch_number}`}
        </Text> */}
        <Text color={'#fff'} fontWeight={700}>
          {`success: ${proverJob?.success}`}
        </Text>
        <Text color={'#fff'} fontWeight={700}>
          {`in_progress: ${proverJob?.in_progress}`}
        </Text>
      </Flex>
    );
  };

  return (
    <Flex
      position={'relative'}
      className={s.block_container}
      zIndex={2}
      onClick={() => blockOnClick(data)}
    >
      <Flex
        display={'flex'}
        flexDir={'column'}
        align={'center'}
        textAlign={'center'}
        fontSize={'13px'}
        justify={'center'}
        className={
          isQueue ? s.backgroundColor_pending : s.backgroundColor_success
        }
      >
        {isQueue ? renderQueueData() : renderSuccessData()}
      </Flex>
    </Flex>
  );
};

export default BatchBody;
