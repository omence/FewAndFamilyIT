import styles from './Services.module.css'

const services = [
  {
    icon: '☁️',
    title: 'Cloud Infrastructure & Migration',
    description:
      'Design, migrate, and manage your workloads on AWS. From lift-and-shift to full cloud-native architectures — we handle the complexity so you don\'t have to.',
  },
  {
    icon: '💻',
    title: 'Custom Web & API Development',
    description:
      'Modern web applications and APIs built with .NET and React. Scalable, maintainable, and tailored to fit the way your organization actually works.',
  },
  {
    icon: '⚙️',
    title: 'Process Automation',
    description:
      'Eliminate repetitive manual work with smart automation. From simple scripts to enterprise workflows, we identify the bottlenecks and build the solutions.',
  },
  {
    icon: '🏛️',
    title: 'Legacy System Modernization',
    description:
      'Still running systems from a decade ago? We assess, plan, and execute modernization projects that reduce risk, cut costs, and unlock new capabilities.',
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.section} aria-labelledby="services-heading">
      <div className="container">
        <span className="section-label" aria-hidden="true">What We Do</span>
        <h2 id="services-heading" className="section-title">Services Built for Local Government &amp; Business</h2>
        <p className={`section-subtitle ${styles.intro}`}>
          We focus on four core areas where we can make an immediate, measurable difference
          for organizations in Montgomery County and surrounding areas.
        </p>
        <ul className={styles.grid}>
          {services.map((s) => (
            <li key={s.title} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">{s.icon}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.description}</p>
            </li>
          ))}
        </ul>
        <div className={styles.compliance}>
          <span className={styles.complianceIcon} aria-hidden="true">✓</span>
          <p>
            All builds follow <strong>Section 508</strong> and{' '}
            <strong>Texas TAC 206</strong> accessibility standards — so your constituents
            and staff can use every tool we deliver, regardless of ability.
          </p>
        </div>
      </div>
    </section>
  )
}
