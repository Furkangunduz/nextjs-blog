import React from 'react';
import styles from './featured.module.css';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Hey, I am <b>Furkan Gündüz</b> It is my personal blog.
      </h1>
    </div>
  );
};

export default Featured;
