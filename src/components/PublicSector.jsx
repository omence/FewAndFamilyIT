import styles from './PublicSector.module.css'

const partners = [
  'Local government agencies',
  'Counties',
  'School districts',
]

const paths = [
  'Discretionary',
  'Micro-purchase',
  'Sole-source',
]

export default function PublicSector() {
  return (
    <section id="contracts" className={styles.section} aria-labelledby="contracts-heading">
      <div className="container">
        <div className={styles.layout}>
          <div>
            <span className="section-label" aria-hidden="true">How We Partner</span>
            <h2 id="contracts-heading" className="section-title">
              Public Sector &amp; Local Government Contracts
            </h2>
            <div className={styles.body}>
              <p>
                Few &amp; Family IT delivers high-level software engineering and cloud
                architecture tailored for public infrastructure. While we have the
                architectural capacity to handle major enterprise deployments, our primary
                focus is partnering with local government agencies, counties, and school
                districts on discretionary, micro-purchase, and sole-source contracts that
                fall under formal bidding thresholds.
              </p>
              <p>
                We actively seek out and prioritize these small to mid-size public sector
                projects that larger firms often pass up, providing local agencies with
                elite engineering expertise without the enterprise overhead.
              </p>
            </div>
          </div>

          <aside className={styles.panel} aria-label="Contract focus">
            <h3>Who we prioritize</h3>
            <ul className={styles.list}>
              {partners.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>How agencies engage us</h3>
            <ul className={styles.list}>
              {paths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.note}>Under formal bidding thresholds.</p>
          </aside>
        </div>
      </div>
    </section>
  )
}
