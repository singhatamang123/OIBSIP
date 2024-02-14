// Footer.js
import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Nepizza. All rights reserved.</p>
      
    </footer>
  );
};

export default Footer;
