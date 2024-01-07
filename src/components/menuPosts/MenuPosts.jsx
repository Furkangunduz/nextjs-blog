import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './menuPosts.module.css';

const getMostPopularFivePost = async () => {
  const res = await fetch(`http://127.0.0.1:3000/api/posts?popular=5`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed');
  }

  return res.json();
};

const MenuPosts = async ({ withImage }) => {
  const data = await getMostPopularFivePost();

  return (
    <div className={styles.items}>
      {data.posts.map((item) => {
        return (
          <Link key={item.id} href={`/posts/${item.slug}`} className={styles.item}>
            {withImage &&
              item.img(
                <div className={styles.imageContainer}>
                  <Image src={item.img} alt="" fill className={styles.image} />
                </div>
              )}
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.travel}`}>{item.catSlug}</span>
              <h3 className={styles.postTitle}>{item.title}</h3>
              <div className={styles.detail}>
                <span className={styles.username}>{item?.user?.name}</span>
                <span className={styles.date}> - {item?.createdAt?.substring(0, 10)}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MenuPosts;
