type Params = {
  elementRef?: any;
  scrollDelay?: number; // miliseconds
};

export const useScrollToView = (params: Params) => {
  const { elementRef, scrollDelay = 1 } = params;

  const scrollToElement = () => {
    setTimeout(() => {
      elementRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }, scrollDelay);
  };

  const scrollToTop = () => {
    setTimeout(() => {
      elementRef?.current?.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }, scrollDelay);
  };

  const scrollToEnd = () => {
    setTimeout(() => {
      elementRef?.current?.scrollTo({
        top: 0,
        left: 9999990,
        behavior: 'smooth',
      });
    }, scrollDelay);

    // setTimeout(() => {
    //   elementRef?.current?.scrollTo(999999, 0);
    // }, scrollDelay);
  };

  return {
    elementRef,
    scrollToElement,
    scrollToTop,
    scrollToEnd,
  };
};
