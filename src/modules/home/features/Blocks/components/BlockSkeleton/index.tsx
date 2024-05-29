import { Flex, Skeleton } from '@chakra-ui/react';
import s from './styles.module.scss';

export default () => {
  return (
    <Flex
      className={s.block_container}
      w={'125px'}
      h={'125px'}
      position={'relative'}
    >
      <Flex>
        <Skeleton w={'125px'} h={'125px'} />
      </Flex>
    </Flex>
  );
};
