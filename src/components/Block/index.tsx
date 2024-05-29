import { Flex } from '@chakra-ui/react';
import BlockBody from './BlockBody';
import BlockFooter from './BlockFooter';
import BlockHeader from './BlockHeader';
import { IBlock } from './type';

type BlockProps = {
  data?: IBlock;
};

const Block = (props: BlockProps) => {
  const { data } = props;
  return (
    <Flex flexDir={'column'} gap={'10px'}>
      {/* <BlockHeader data={data} /> */}
      <BlockBody data={data} />
      {/* <BlockFooter data={data} /> */}
    </Flex>
  );
};

export default Block;
