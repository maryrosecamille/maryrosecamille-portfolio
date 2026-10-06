import type { CSSProperties } from 'react'
import { ArrowUpRight, MapPin } from '@/components/slab'
import { profile } from '@/data/profile'

const GWS = { src: '/icons/googleworkspace.svg', name: 'Google Workspace' }
const GEMINI = { src: '/icons/googleworkspace.svg', name: 'Gemini for Workspace' }
const CHATGPT = { src: '/icons/openai.svg', name: 'ChatGPT' }

type Capability = {
  index: string
  title: string
  marks: { src: string; name: string }[]
}

const CAPABILITIES: Capability[] = [
  { index: '01', title: 'Executive & Administrative Support', marks: [GWS] },
  { index: '02', title: 'Google Workspace Operations', marks: [GWS, GEMINI] },
  { index: '03', title: 'AI-Assisted Workflows', marks: [GEMINI, CHATGPT] },
  { index: '04', title: 'Client & Business Operations', marks: [GWS] },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">{`Hi, I’m ${profile.firstName}.`}</h1>
        <p className="pgrid__lede">
          From customer operations and technical support to AI-powered executive operations.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I bring customer operations, sales, administrative support, and technical problem-solving together.
            <span> Now I’m applying that experience to executive support powered by Google Workspace and AI.</span>
          </p>

          <p className="agrid__note">
            I currently work as an <strong>Application Support Engineer at Accenture</strong>, supporting Google as part of the Quota Increase team and working with Salesforce. My background has built strong habits in client communication, documentation, follow-ups, cross-team coordination, and problem solving.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span key={`${m.name}-${i}`} className="agrid__mark" style={{ '--i': c.marks.length - i } as CSSProperties}>
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">{c.index}</span>
              </li>
            ))}
          </ul>

          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark agrid__cell-mark--img">
                <img src="/icons/googleworkspace.svg" alt="" loading="lazy" decoding="async" />
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
                <img src="/icons/linkedin.svg" alt="" loading="lazy" decoding="async" />
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
