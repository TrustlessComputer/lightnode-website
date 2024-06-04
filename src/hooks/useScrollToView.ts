import { createRef } from 'react';

type Params = {
  scrollDelay: number; // miliseconds
};

export const useScrollToView = (params: Params) => {
  const { scrollDelay = 500 } = params;

  const elementRef = createRef<HTMLElement>();

  const scrollToElement = () => {
    setTimeout(() => {
      elementRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }, scrollDelay);
  };
  return {
    elementRef,
    scrollToElement,
  };
};
