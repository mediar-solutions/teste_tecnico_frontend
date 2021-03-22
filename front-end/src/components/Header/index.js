import React from 'react'

import mediarLogo from '../../assets/logo.png';
import styles from './Header.module.css';

function Home() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={mediarLogo} alt="Mediar Solutions" />
    </header>
  )
}

export default Home
