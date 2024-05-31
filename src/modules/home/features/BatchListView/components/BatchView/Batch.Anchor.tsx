import { Flex } from '@chakra-ui/react';
import s from './styles.module.scss';

type BlockProps = {};

const BatchAnchor = (props: BlockProps) => {
  return <Flex className={s.anchorView}></Flex>;
};

export default BatchAnchor;
