import { useEffect } from 'react'
import styles from './CapabilityStatement.module.css'

const PDF_HREF = '/capability-statement.pdf'
const PDF_NAME = 'Few-and-Family-IT-Capability-Statement.pdf'

const intro =
  'Few & Family IT delivers comprehensive custom software engineering, full-stack application development, and advanced AWS cloud architecture services to municipal agencies, local governments, and educational institutions in Montgomery County, Texas. As an agile, senior-directed firm, we possess the technical capabilities to architect, build, and deploy any custom digital solution—from standalone software tools to complex, highly scalable cloud integrations.'

const competencies = [
  {
    title: 'Full-Stack Custom Development',
    body: 'End-to-end design, programming, and deployment of any bespoke internal tools, database systems, web portals, or enterprise-grade software applications.',
  },
  {
    title: 'AWS Cloud Engineering',
    body: 'Architecting secure, scalable cloud-native architectures, implementing serverless workflows (AWS Lambda, API Gateway), and executing seamless cloud migrations to reduce public infrastructure costs.',
  },
  {
    title: 'Systems Integration & APIs',
    body: 'Modernizing legacy architectures by engineering robust, secure application programming interfaces (APIs) to seamlessly bridge disparate on-premise and cloud software platforms.',
  },
  {
    title: 'Database Design & Optimization',
    body: 'Designing, restructuring, and tuning relational databases (SQL) and high-performance cloud data warehouses to ensure absolute data integrity and strict security compliance.',
  },
]

const differentiators = [
  {
    title: 'Unrestricted Software Capabilities',
    body: 'Uniquely positioned as a true end-to-end software engineering generalist, capable of building any custom application or system modification a municipality requires.',
  },
  {
    title: 'Discretionary Project Specialist',
    body: 'Optimized to execute specialized, high-impact software and cloud builds under the $50,000 discretionary spend threshold, bypassing lengthy formal RFP backlogs.',
  },
  {
    title: 'Senior Enterprise Execution',
    body: 'Powered by deep enterprise software architecture expertise, ensuring clean documentation, secure version control, and production-ready codebases.',
  },
  {
    title: 'Hyper-Local Footprint',
    body: 'Based directly in Montgomery, Texas, providing direct communication, alignment, and absolute accountability that offshore or national agencies cannot match.',
  },
]

const corporate = [
  { label: 'Legal Entity Name', value: "Few's Digital Enterprises LLC" },
  { label: 'Trade Name / DBA', value: 'Few and Family IT' },
  { label: 'Business Structure', value: 'Texas Limited Liability Company (LLC)' },
  { label: 'Primary Geographic Area', value: 'Montgomery County, TX' },
  {
    label: 'Website',
    value: 'https://fewandfamilyit.com',
    href: 'https://fewandfamilyit.com',
  },
]

const naics = [
  { code: '541511', name: 'Custom Computer Programming Services', primary: true },
  { code: '541512', name: 'Computer Systems Design Services' },
  { code: '541519', name: 'Other Computer Related Services' },
]

function BulletList({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.title}>
          <h3 className={styles.itemTitle}>{item.title}</h3>
          <p className={styles.itemBody}>{item.body}</p>
        </li>
      ))}
    </ul>
  )
}

export default function CapabilityStatement() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Capability Statement | Few & Family IT'
    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <article className={styles.page}>
      <header className={styles.masthead}>
        <div className="container">
          <p className={styles.kicker}>Few &amp; Family IT</p>
          <h1 id="capability-heading" className={styles.title}>Capability Statement</h1>
          <p className={styles.tagline}>
            Custom Public Sector Software Engineering &amp; AWS Cloud Solutions
          </p>
          <a className={`btn btn-primary ${styles.download}`} href={PDF_HREF} download={PDF_NAME}>
            Download PDF
          </a>
        </div>
      </header>

      <div className={`container ${styles.sheetWrap}`}>
        <div className={styles.sheet}>
          <p className={styles.intro}>{intro}</p>

          <div className={styles.grid}>
            <section aria-labelledby="competencies-heading">
              <h2 id="competencies-heading" className={styles.heading}>Core Competencies</h2>
              <BulletList items={competencies} />
            </section>
            <section aria-labelledby="differentiators-heading">
              <h2 id="differentiators-heading" className={styles.heading}>Differentiators</h2>
              <BulletList items={differentiators} />
            </section>
          </div>

          <div className={styles.grid}>
            <section aria-labelledby="corporate-heading">
              <h2 id="corporate-heading" className={styles.heading}>Corporate Data</h2>
              <dl className={styles.data}>
                {corporate.map((row) => (
                  <div key={row.label} className={styles.dataRow}>
                    <dt>{row.label}</dt>
                    <dd>
                      {row.href ? (
                        <a href={row.href}>{row.value}</a>
                      ) : (
                        row.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
            <section aria-labelledby="naics-heading">
              <h2 id="naics-heading" className={styles.heading}>NAICS Codes</h2>
              <ul className={styles.codes}>
                {naics.map((item) => (
                  <li key={item.code}>
                    <span className={styles.code}>{item.code}</span>
                    <span className={styles.codeName}>
                      {item.name}
                      {item.primary ? <span className={styles.primary}> Primary</span> : null}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </article>
  )
}
