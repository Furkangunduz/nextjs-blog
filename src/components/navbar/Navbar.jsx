import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}></div>
      <Link href="/" className={styles.link}>
        <div className={styles.logo}>unsatifiedBlog</div>
      </Link>
      <div className={styles.links}>
        <ThemeToggle />
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
