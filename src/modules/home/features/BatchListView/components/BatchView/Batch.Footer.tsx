import { Flex, Text } from '@chakra-ui/react';

type BlockProps = {
  text?: string;
};

const BatchFooter = (props: BlockProps) => {
  const { text } = props;
  return (
    <Flex
      position={'absolute'}
      mt={'150px'}
      mr={'40px'}
      alignSelf={'center'}
      justify={'center'}
      align={'center'}
      zIndex={1}
    >
      <Text
        bgColor={text === 'Confirming' ? '#febc06' : '#344b9f'}
        borderRadius={'4px'}
        py={'3px'}
        px="6px"
        color={text === 'Confirming' ? '#000' : '#fff'}
        fontWeight={700}
        fontSize={'12px'}
      >
        {`${text || ''}`}
      </Text>
    </Flex>
  );
};

export default BatchFooter;
