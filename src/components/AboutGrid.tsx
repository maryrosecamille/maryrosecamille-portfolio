import { ArrowUpRight, Briefcase, Buildings, CalendarCheck, MapPin, Sparkle } from '@/components/slab'
import { profile } from '@/data/profile'

const BASE = import.meta.env.BASE_URL

const CAPABILITIES = [
  { index: '01', title: 'Executive & Administrative Support', Icon: CalendarCheck },
  { index: '02', title: 'Google Workspace Operations', Icon: Briefcase },
  { index: '03', title: 'AI-Assisted Workflows', Icon: Sparkle },
  { index: '04', title: 'Client & Business Operations', Icon: Buildings },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">{`Hi, I’m ${profile.firstName}.`}</h1>
        <p className="pgrid__lede">
          A support professional bringing operations, technology, and AI into executive work.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            My background spans customer operations, sales, administrative support, and technical problem-solving.
            <span> I’m now bringing those strengths into executive support with Google Workspace and practical AI workflows.</span>
          </p>

          <p className="agrid__note">
            I currently work as an <strong>Application Support Engineer at Accenture</strong>, supporting Google as part of the Quota Increase team, with Salesforce in the support workflow. Across my roles, I’ve built strong habits around clear communication, documentation, follow-through, cross-team coordination, and structured problem solving.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks" aria-hidden="true">
                  <span className="agrid__mark">
                    <c.Icon size={18} weight="regular" />
                  </span>
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">{c.index}</span>
              </li>
            ))}
          </ul>

          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark agrid__cell-mark--img">
                <img src={`${BASE}icons/googleworkspace.svg`} alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Google Workspace + Gemini</span>
                <span className="agrid__cell-meta">AI workflow training & badges</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark"><MapPin size={16} weight="fill" aria-hidden="true" /></span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">Remote collaboration</span>
              </span>
            </span>

            <a className="agrid__cell agrid__cell--wide" href="https://www.linkedin.com/in/maryrose-camille-va/" target="_blank" rel="noreferrer">
              <span className="agrid__cell-mark agrid__cell-mark--plain">
                <img src={`${BASE}icons/linkedin.svg`} alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Connect on LinkedIn</span>
                <span className="agrid__cell-meta">Maryrose Camille</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="agrid__portrait">
          <img src={profile.hero.portraitSrc} alt={profile.hero.portraitAlt} loading="eager" decoding="async" width={400} height={400} />
        </div>
      </div>
    </section>
  )
}
