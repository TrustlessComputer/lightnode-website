import { Flex, Skeleton } from '@chakra-ui/react';
import s from './styles.module.scss';

type Props = {
  id: string;
};
export default (props: Props) => {
  return (
    <Flex
      key={props.id || ''}
      id={props.id || ''}
      className={s.block_container}
      position={'relative'}
    >
      <Flex>
        <Skeleton className={s.skeleton} />
      </Flex>
    </Flex>
  );
};
