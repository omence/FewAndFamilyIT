import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand} aria-label="Few and Family IT">
          <span className={styles.logoMark} aria-hidden="true">F&amp;F</span>
          <span className={styles.logoText}>Few &amp; Family IT</span>
        </div>
        <p className={styles.copy}>
          <small>© {new Date().getFullYear()} Few &amp; Family IT, LLC — Montgomery, Texas. All rights reserved.</small>
        </p>
        <nav className={styles.links} aria-label="Footer navigation">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
