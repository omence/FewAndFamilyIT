import styles from './Hero.module.css'
import montgomeryImg from '../assets/montgomery.jpg'

export default function Hero() {
  return (
    <section
      className={styles.hero}
      id="home"
      aria-label="Introduction, Few & Family IT"
    >
      <img
        className={styles.photo}
        src={montgomeryImg}
        alt=""
        width={1168}
        height={784}
        fetchPriority="high"
      />
      <div className={`container ${styles.inner}`}>
        <p className={styles.badge} aria-label="Location: Montgomery, Texas">
          <span aria-hidden="true">📍</span> Montgomery, Texas
        </p>
        <h1 className={styles.headline}>
          Local IT You Can&nbsp;
          <span className={styles.accent}>Count On</span>
        </h1>
        <p className={styles.sub}>
          Few &amp; Family IT is a family-owned consulting firm serving local governments
          and businesses across Montgomery County and surrounding areas. We bring big-firm expertise
          with the personal touch of a neighbor you can actually meet.
        </p>
        <div className={styles.actions}>
          <a href="#contact" className="btn btn-primary">Schedule a Free Consultation</a>
          <a href="#services" className="btn btn-outline">View Our Services</a>
        </div>
        <ul className={styles.trust} aria-label="Key credentials">
          <li><span aria-hidden="true">☁️</span> AWS</li>
          <li><span aria-hidden="true">💻</span> .NET &amp; React</li>
          <li><span aria-hidden="true">🏛️</span> Government Experience</li>
          <li><span aria-hidden="true">✓</span> Section 508 &amp; TAC 206 Compliant</li>
          <li><span aria-hidden="true">🤝</span> Family-Owned</li>
        </ul>
      </div>
    </section>
  )
}
