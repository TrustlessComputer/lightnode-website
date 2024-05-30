import { Flex, Skeleton } from '@chakra-ui/react';
import s from './styles.module.scss';

type Props = {
  index: number;
};

export default (props: Props) => {
  const { index } = props;

  return (
    <Flex className={s.block_container} position={'relative'}>
      <Flex>
        <Skeleton className={s.skeleton} />
      </Flex>
    </Flex>
  );
};
