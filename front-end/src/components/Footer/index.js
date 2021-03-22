import React from 'react';

import Link from '@material-ui/core/Link';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      {'Copyright ©  '}
      <Link color="inherit" href="https://www.mediarsolutions.com/">
        Mediar Solutions
      </Link>
    </footer>
  )
}

export default Footer
