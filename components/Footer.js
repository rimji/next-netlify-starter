import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/logo-drjogis.png" alt="Dr.Jogi's" className={styles.logo} />
      </footer>
    </>
  )
}
