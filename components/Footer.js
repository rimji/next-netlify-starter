import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/logo2-drjogis.png" alt="Dr.Jogi's" className={styles.logo} />
        <br>&copy; 2023 Dr.Jogi's
      </footer>
    </>
  )
}
