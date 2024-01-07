import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            style={{
              borderRadius: '50%',
            }}
            src="/kraldragon.jpg"
            alt="kraldragon blog"
            width={50}
            height={50}
          />
          <h1 className={styles.logoText}>UnsatifiedBlog</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
