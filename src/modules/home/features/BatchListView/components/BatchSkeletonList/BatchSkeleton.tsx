import { Flex, Skeleton } from '@chakra-ui/react';
import s from './styles.module.scss';

type Props = {};
export default (props: Props) => {
  return (
    <Flex className={s.block_container} position={'relative'}>
      <Flex>
        <Skeleton className={s.skeleton} />
      </Flex>
    </Flex>
  );
};
