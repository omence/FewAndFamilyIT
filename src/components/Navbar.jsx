import { useEffect, useRef, useState } from 'react'
import styles from './Navbar.module.css'
import icon from '../assets/icon.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const headerRef = useRef(null)
  const burgerRef = useRef(null)

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'About',    href: '#about' },
    { label: 'Contact',  href: '#contact' },
  ]

  useEffect(() => {
    if (!open) return undefined

    const onKey = (event) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      burgerRef.current?.focus()
    }

    const onPointer = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpen(false)
    }

    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.logo} aria-label="Few & Family IT home">
          <img className={styles.logoMark} src={icon} alt="" width={522} height={495} />
          <span className={styles.logoText}>Few &amp; Family IT</span>
        </a>

        <nav
          id="primary-nav"
          className={`${styles.nav} ${open ? styles.navOpen : ''}`}
          aria-label="Primary navigation"
        >
          {links.map(l => (
            <a key={l.label} href={l.href} className={styles.navLink} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className={`btn btn-primary ${styles.navCta}`} onClick={() => setOpen(false)}>
            Get in Touch
          </a>
        </nav>

        <button
          ref={burgerRef}
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="primary-nav"
        >
          <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}
