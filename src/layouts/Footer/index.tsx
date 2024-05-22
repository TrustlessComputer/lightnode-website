'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import s from './styles.module.scss';
// import { Box, Container, Stack, Text } from '@chakra-ui/react';
import cn from 'classnames';

const Footer = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={s.wrapper}>
      <div
        className={`${s.footer}`}
        style={{ backgroundImage: 'url(/footer/bgFooter.png)' }}
      >
        <div className="container">
          <div className={s.main}>
            <div className={s.main_top}>
              <div className={s.main_top_left}>
                <p className={s.mainContent}>
                  Experience Bitcoin like never before.
                </p>
                <div>
                  <div className={s.footer_wrapBtns}>
                    <div className={s.dropMenu}>
                      <p className={cn(s.footer_btn)}>Build on Bitcoin</p>
                      <ul className={s.dropMenu_list}></ul>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href={'#'}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(true);
                }}
                className={s.footer_video}
              >
                <Image
                  src={`/public-sale/btn-play-3.png`}
                  width={224}
                  height={120}
                  alt={'right'}
                />
              </a>
            </div>
          </div>
          <div className={s.footer_line}></div>
          <div className={s.links}>
            <Link href={'https://twitter.com/BVMnetwork'} target="_blank">
              <p className={s.links_item}>twitter</p>
            </Link>
            <Link href={'https://t.me/BVMofficialcommunity'} target="_blank">
              <p className={s.links_item}>telegram</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
