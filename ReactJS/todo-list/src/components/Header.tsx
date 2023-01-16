import styles from './Header.module.css';

import logo from '../assets/logo.svg'

export function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="Logotipo de um foguete" />
      <h2>to<span>do</span></h2>
    </div>
  )
}