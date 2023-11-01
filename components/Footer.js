import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/logo2-drjogis.png" alt="Dr.Jogi's" className={styles.logo} />
        <p className="description"> 
        <a href="https://www.instagram.com/drjogis" target="_blank" rel="noopener noreferrer"><code>@drjogis</code></a>
        </p>
      </footer>
    </>
  )
}
