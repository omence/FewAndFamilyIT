import styles from './About.module.css'

const stats = [
  { num: '3 yrs', label: 'Municipal Government Experience' },
  { num: '5 yrs', label: 'Fortune 100 Tech Lead' },
  { num: '8+', label: 'Years Delivering Enterprise Solutions' },
]

export default function About() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <div className="container">
        <div className={styles.top}>
          <span className="section-label" aria-hidden="true">Who We Are</span>
          <h2 id="about-heading" className="section-title">Big-Firm Expertise. Small-Town Accountability.</h2>
        </div>

        <div className={styles.inner}>
          <div className={styles.content}>
            <p className={styles.body}>
              Jason Few spent three years as a software engineer for the{' '}
              <strong>City of Seattle</strong>, building tools for municipal departments.
              He knows how small governments actually operate: the budget cycles, the
              procurement rules, the staff who wear five hats.
            </p>
            <p className={styles.body}>
              He's spent the last five years at a <strong>Fortune 100 company</strong> as
              a tech lead, designing and delivering multi-million-dollar builds across cloud
              infrastructure, custom applications, and process automation.
            </p>
            <p className={styles.body}>
              That mix of <strong>real municipal experience</strong> and{' '}
              <strong>enterprise-scale delivery</strong> is what Few &amp; Family IT brings
              to every project — right here in Conroe and Montgomery County.
            </p>

            <div className={styles.stats}>
              {stats.map((s) => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statNum}>{s.num}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.callout}>
            <div className={styles.calloutInner}>
              <div className={styles.calloutIcon} aria-hidden="true">🏛️</div>
              <h3>We've Worked Inside Government</h3>
              <p>
                Most consultants have never sat inside a city department. Jason has.
                That means we understand your constraints, your approval chains, and
                your constituents — not just your tech stack.
              </p>
              <div className={styles.divider} />
              <div className={styles.calloutIcon} aria-hidden="true">🤝</div>
              <h3>You Can Actually Meet Us</h3>
              <p>
                Based in Montgomery, TX — available for on-site visits across Conroe
                and Montgomery County. No 1-800 numbers. No offshore queues.
              </p>
              <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
