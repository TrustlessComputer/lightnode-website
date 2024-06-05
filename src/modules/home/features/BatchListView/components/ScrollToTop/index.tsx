import { Image } from '@chakra-ui/react';
import s from './styles.module.scss';

type ScrollToTopParams = {
  onClick?: () => void;
};

const ScrollToTop = (params: ScrollToTopParams) => {
  const { onClick } = params;

  return (
    <div className={s.container}>
      <div className={s.iconPosition}>
        <Image
          src={`/icons/arrow-left-fill.svg`}
          height={'55px'}
          width={'auto'}
          className={s.iconStyle}
          onClick={onClick}
        />
      </div>
    </div>
  );
};
export default ScrollToTop;
