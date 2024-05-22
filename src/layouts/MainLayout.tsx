'use client';

import { HeaderProps } from '@/layouts/Header';
import { Box, Flex } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import s from './styles.module.scss';
// import Footer from '@/layouts/Footer';

type IMainProps = {
  hideHeader?: boolean;
  hideFooter?: boolean;
  children?: React.ReactNode;
  headerProps?: HeaderProps;
};

const MainLayout = ({
  hideHeader = false,
  hideFooter = false,
  headerProps,
  children,
}: IMainProps) => {
  const pathName = usePathname();
  useEffect(() => {}, [pathName]);

  return (
    <Flex className={s.container}>
      {/* {<Header {...headerProps} />} */}
      {/* {!hideHeader && <HeaderV2 {...headerProps} />} */}
      {children}
      {/* {!hideFooter && <Footer />} */}
    </Flex>
  );
};

export default MainLayout;
