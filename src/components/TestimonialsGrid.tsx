import { Briefcase, Medal, SealCheck } from '@/components/slab'

const EXPERIENCE = [
  {
    index: '01',
    name: 'Accenture',
    role: 'Application Support Engineer · Aug 2026–Present',
    daily: 'Supporting Google as part of the Quota Increase team, with Salesforce used in the support workflow.',
    work: ['Application Support', 'Salesforce', 'Google Support'],
  },
  {
    index: '02',
    name: 'Peak Outsourcing',
    role: 'B2B Sales Representative & Administrative Assistant · Nov 2023–May 2026',
    daily: 'Handled quotations, order processing, customer records, follow-ups, client communication, and coordination with onshore teams using Google Workspace and Microsoft Office.',
    work: ['Administration', 'Client Operations', 'Sales Support'],
  },
  {
    index: '03',
    name: 'TELUS International Philippines',
    role: 'Operations CSR · May 2021–May 2023',
    daily: 'Provided Level 1 technical support, account recovery and email configuration while supporting billing, subscriptions, cybersecurity products, and identity theft insurance.',
    work: ['Technical Support', 'Customer Operations', 'Sales'],
  },
  {
    index: '04',
    name: 'Everise Philippines',
    role: 'Customer Service Representative · Aug–Oct 2023',
    daily: 'Supported healthcare providers with insurance payment inquiries, claim and account status updates, documentation, and follow-ups.',
    work: ['Healthcare', 'Documentation', 'Follow-up'],
  },
  {
    index: '05',
    name: 'FIS Global Solutions',
    role: 'Customer Service Representative · Oct 2020–Feb 2021',
    daily: 'Supported payroll bank account inquiries, transaction reviews, unfamiliar charges, disputed transactions, documentation, and escalation.',
    work: ['Financial Support', 'Documentation', 'Escalation'],
  },
]

const CREDENTIALS = [
  'Google Workspace with Gemini: Foundations of Your AI Workflow',
  'Gemini in Google Workspace Studio',
  'Introduction to the Gemini App',
  'Gemini in Google Vids',
  'Gemini in Google Drive',
  'Gemini in Google Chat',
  'Gemini in Google Meet',
  'Gemini in Google Sheets',
  'Gemini in Google Slides',
  'Gemini in Gmail',
  'Gemini in Google Docs',
]

const LEADERSHIP = [
  'Foundations of Leadership',
  'Effective Coaching',
  'Introduction to Root Cause Analysis and SMART Action Planning',
  'IT Cybersecurity',
]

export default function TestimonialsGrid() {
  return (
    <section className="pgrid tgrid" aria-labelledby="experience-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Experience & Credentials</span>
        <h1 className="pgrid__title" id="experience-title">Built on operations, support, and continuous learning.</h1>
        <p className="pgrid__lede">Professional experience and training behind my transition into AI-powered executive support.</p>
      </header>

      <div className="home__glass tgrid__glass">
        <div className="tgrid__reel">
          <div className="tgrid__ledger">
            <div className="tgrid__ledger-head">
              <h2 className="tgrid__ledger-title">Google & professional credentials</h2>
              <p className="tgrid__ledger-sub">Training focused on Google Workspace, Gemini, leadership, coaching, and structured problem solving.</p>
            </div>
            <ul className="tgrid__clients" role="list">
              <li className="tgrid__client">
                <span className="tgrid__client-mark" aria-hidden="true"><SealCheck size={22} weight="duotone" /></span>
                <span className="tgrid__client-body">
                  <span className="tgrid__client-head"><span className="tgrid__client-name">Google Skills</span><span className="tgrid__client-role">Workspace + Gemini</span></span>
                  <span className="tgrid__client-daily">{CREDENTIALS.join(' · ')}</span>
                </span>
              </li>
              <li className="tgrid__client">
                <span className="tgrid__client-mark" aria-hidden="true"><Medal size={22} weight="duotone" /></span>
                <span className="tgrid__client-body">
                  <span className="tgrid__client-head"><span className="tgrid__client-name">Peak Outsourcing Training</span><span className="tgrid__client-role">Leadership</span></span>
                  <span className="tgrid__client-daily">{LEADERSHIP.join(' · ')}</span>
                </span>
              </li>
              <li className="tgrid__client">
                <span className="tgrid__client-mark" aria-hidden="true"><Medal size={22} weight="duotone" /></span>
                <span className="tgrid__client-body">
                  <span className="tgrid__client-head"><span className="tgrid__client-name">Recognition</span><span className="tgrid__client-role">Awards & academics</span></span>
                  <span className="tgrid__client-daily">Sales Brag Grand Champion · LUWAD Award for Excellence · Consistent Honor Student</span>
                </span>
              </li>
              <li className="tgrid__client">
                <span className="tgrid__client-mark" aria-hidden="true"><Briefcase size={22} weight="duotone" /></span>
                <span className="tgrid__client-body">
                  <span className="tgrid__client-head"><span className="tgrid__client-name">Education</span><span className="tgrid__client-role">Business</span></span>
                  <span className="tgrid__client-daily">BS Business Administration – Human Resource Management, Pateros Technological College (2026) · BS Management Accounting, University of Makati (undergraduate, 2019–2021) · ABM, University of Makati (2017–2019)</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="tgrid__ledger">
          <div className="tgrid__ledger-head">
            <h2 className="tgrid__ledger-title">Professional experience</h2>
            <p className="tgrid__ledger-sub">Transferable experience in application support, administration, client operations, sales, and technical support.</p>
          </div>
          <ul className="tgrid__clients" role="list">
            {EXPERIENCE.map((c) => (
              <li key={c.index} className="tgrid__client">
                <span className="tgrid__client-ghost" aria-hidden="true">{c.index}</span>
                <span className="tgrid__client-mark" aria-hidden="true"><Briefcase size={22} weight="duotone" /></span>
                <span className="tgrid__client-body">
                  <span className="tgrid__client-head"><span className="tgrid__client-name">{c.name}</span><span className="tgrid__client-role">{c.role}</span></span>
                  <span className="tgrid__client-daily">{c.daily}</span>
                  <ul className="tgrid__client-tags" role="list">{c.work.map((w) => <li key={w} className="tgrid__client-tag">{w}</li>)}</ul>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
