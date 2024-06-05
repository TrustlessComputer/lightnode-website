import { Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import s from './styles.module.scss';

type ScrollToBottomParams = {
  onClick?: () => void;
};

const ScrollToBottom = (params: ScrollToBottomParams) => {
  const { onClick } = params;
  return (
    <div className={s.container}>
      <div className={s.iconPosition}>
        <Image
          src={`/icons/arrow-right-fill.svg`}
          height={'55px'}
          width={'auto'}
          className={s.iconStyle}
          onClick={onClick}
        />
      </div>
    </div>
  );
};
export default ScrollToBottom;
