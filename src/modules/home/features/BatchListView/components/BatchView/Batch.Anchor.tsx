import { IBatch } from '@/stores/states/batch/types';
import { Flex } from '@chakra-ui/react';
import s from './styles.module.scss';

type BlockProps = {
  data?: IBatch;
};

const BatchAnchor = (props: BlockProps) => {
  const { data } = props;
  return <Flex className={s.anchorView}></Flex>;
};

export default BatchAnchor;
