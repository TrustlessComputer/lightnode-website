'use client';

import s from './styles.module.scss';

const Footer = () => {
  return (
    <div className={s.container}>
      <div
        className={`${s.footer}`}
        // style={{ backgroundImage: 'url(/footer/bgFooter.png)' }}
      >
        <div className="container"></div>
      </div>
    </div>
  );
};

export default Footer;
